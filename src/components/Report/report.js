import React, { useState, useEffect } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { database } from "../../firebase.js";
import Tabs from 'react-bootstrap/Tabs'; 
import Tab from 'react-bootstrap/Tab';
import ReportEnvironment from "./reportEnvironment.js";
import "./style.scss";

const Report = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null)

  useEffect(() => {
    const queryFirestore = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'environment_data'));
        const returnedData = querySnapshot.docs.map((doc) => doc.data());
        console.log('check data:', returnedData);
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
    <div className='report'>
      <Tabs defaultActiveKey="first"> 
        <Tab eventKey="first" title="Environment">
          <ReportEnvironment />
        </Tab> 
        <Tab eventKey="second" title="Social"> 
          Hii, I am 2nd tab content 
        </Tab> 
        <Tab eventKey="third" title="Government"> 
          Hii, I am 3rd tab content 
        </Tab> 
      </Tabs> 
    </div>
  );
};

export default Report;
