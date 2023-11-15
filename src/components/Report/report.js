import React, { useState, useEffect, useRef } from "react";
import { ThreeDots } from "react-loader-spinner";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../../firebase.js";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ReportEnvironment from "./reportEnvironment.js";
import ComingSoon from "../ComingSoon/commingSoon.js";
import "./style.scss";
import { useReactToPrint } from "react-to-print";
import { Title } from "../../atoms/index.js";
import Papa from "papaparse";
import { getLatestDataAll } from "../Utils/utils.js";

const Report = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("first");
  const [csvData, setCSVData] = useState("");
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Report",
    onAfterPrint: () => console.log("Printed PDF successfully!"),
  });

  useEffect(() => {
    const queryFirestore = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(database, "environment_data")
        );
        const returnedData = querySnapshot.docs.map((doc) => doc.data());
        setData(returnedData);
      } catch (error) {
        console.error("Error querying Firestore:", error);
      }
    };

    queryFirestore();
  }, []);

  if (isLoading || !data) {
    return (
      <ThreeDots
        height='80'
        width='80'
        radius='9'
        color='#4fa94d'
        ariaLabel='three-dots-loading'
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClassName=''
        visible={true}
      />
    );
  }
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const handleDownload = () => {
    let combinedData = [];
    let fileName = "combined_data.csv";
    if (activeTab === "first") {
      const latestData = getLatestDataAll(data, "co2");
      const arrayofData = latestData.map((item) => [...item.data]);
      const arraysData = arrayofData.map((array) => {
        if (!Array.isArray(array) || array.length === 0) {
          return [];
        }
        const header = Object.keys(array[0] || {});
        const rows = array.map((row) => header.map((key) => row[key]));

        return [header, ...rows, []];
      });
      combinedData = arraysData.flat();
      fileName = "Environment_Data.csv";
    }

    const csv = Papa.unparse(combinedData);

    setCSVData(csv);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='report'>
      <Title title='Report' size='medium' subtitle='ESG framework: GRI' />
      <div className='downloadBtn'>
        <button
          className='btn btn-primary print_btn mx-2'
          onClick={handlePrint}
        >
          Download PDF
        </button>
        <button className='btn btn-primary print_btn' onClick={handleDownload}>
          Download CSV
        </button>
      </div>
      <div ref={componentRef}>
        <Tabs
          defaultActiveKey='first'
          activeKey={activeTab}
          onSelect={handleTabSelect}
        >
          <Tab eventKey='first' title='Environment'>
            <ReportEnvironment data={data} />
          </Tab>
          <Tab eventKey='second' title='Social'>
            <ComingSoon />
          </Tab>
          <Tab eventKey='third' title='Government'>
            <ComingSoon />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Report;
