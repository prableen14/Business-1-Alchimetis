import React, { useState, useEffect, useRef } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { database } from "../../firebase.js";
import Tabs from 'react-bootstrap/Tabs'; 
import Tab from 'react-bootstrap/Tab';
import ReportEnvironment from "./reportEnvironment.js";
import ComingSoon from "../ComingSoon/commingSoon.js";
import "./style.scss";
import { useReactToPrint } from "react-to-print";

const Report = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null)

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Report',
    onAfterPrint: () => console.log('Printed PDF successfully!'),
   });

  useEffect(() => {
    const queryFirestore = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'environment_data'));
        const returnedData = querySnapshot.docs.map((doc) => doc.data());
        setData(returnedData)
      } catch (error) {
        console.error('Error querying Firestore:', error);
      }
    };
  
    queryFirestore();
  }, []);

  if (isLoading || !data) {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClassName=""
        visible={true}
      />
    )
  }

  return (
    <div ref={componentRef} className='report'>
      <button className="btn btn-primary print_btn" onClick={handlePrint}>Print</button>
      <Tabs defaultActiveKey="first"> 
        <Tab eventKey="first" title="Environment">
          <ReportEnvironment data={data}/>
        </Tab> 
        <Tab eventKey="second" title="Social"> 
           <ComingSoon />
        </Tab> 
        <Tab eventKey="third" title="Government"> 
           <ComingSoon />
        </Tab> 
      </Tabs> 
    </div>
  );
};

export default Report;
