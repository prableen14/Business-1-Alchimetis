import React, { useState } from "react";
import "./style.scss";
import { parseCsvToJson, transformData } from "../Utils/utils.js";
import Form from 'react-bootstrap/Form';
import classnames from 'classnames';
import { ThreeDots  } from  'react-loader-spinner';
import { collection, addDoc } from 'firebase/firestore';
import { database } from "../../firebase.js";
import Papa from 'papaparse';

const dataTypeList = {
  "e-co2-group": "Environment - CO2 - Activity by groups",
  "e-co2-location": "Environment - CO2 - Activity by locations",
  "e-co2-scope": "Environment - CO2 - Activity by scopes",
  "e-co2-period": "Environment - CO2 - Activity by periods",
  "e-co2-datatype": "Environment - CO2 - Activity by datatype",
  "e-energy-period": "Environment - Energy - Activity by periods",
}

const Datalake = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dataType, setDataType] = useState("e-co2-groups");
  const [isUploading, setIsUploading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && !file.name.includes('.csv')) {
      alert("Only csv files please!")
      return
    }
    setSelectedFile(file);
  };

  const handleUploadFile = async (e) => {
    if (!selectedFile && !dataType) return;

    setIsUploading(true)

    const uploadDataToFirestore = async (dataToUpload) => {
      try {
        const collectionRef = collection(database, 'environment_data');
        const docRef = await addDoc(collectionRef, dataToUpload);
    
        console.log('Data uploaded successfully with document ID:', docRef.id);
      } catch (error) {
        console.error('Error uploading data to Firestore:', error);
      }
    };


    try {
      Papa.parse(selectedFile, {
        header: true,
        complete: async function(results) {
          try {
            const transformedData = transformData(results.data, dataType)
            if (!transformedData) {
              setShowError(true)
              return;
            }
            
            const dataToUpload = {
              category: dataType.split('-')[1],
              data: transformedData,
              groupBy: dataType.split('-')[2],
              createdDate: new Date(),
              type: dataType.split('-')[0]
            };
    
            console.log("Uploading data:", dataToUpload);
            await uploadDataToFirestore(dataToUpload);
            alert("Data is saved sucessfully!")
          } catch (error) {
            console.error('Error processing data:', error);
            // Handle the error appropriately, e.g., show an error message
          }
        },
        error: function(error) {
          console.error('Error parsing CSV:', error);
          // Handle the error appropriately, e.g., show an error message
        }
      });
    } catch (error) {
      console.error('Error parsing CSV:', error);
      // This block may not catch errors thrown inside the Papa.parse async function
    }
    
    if (showError) {
      setShowError(false);
    } 
    setIsUploading(false)
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSelect = (e) => {
    e.preventDefault()
    setDataType(e.target.value)
  }

  if (isUploading) {
    return (
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{justifyContent:'center'}}
        wrapperClassName=""
        visible={true}
        />
    )
  }

  return (
    <div className='datalake'>
      <p><a href="https://app.degoo.com/share/2x52eP9til_hfjMvpwX8yg" target="_blank" rel="noreferrer" className="datalake-body-btn">Click here</a> to view sample csv files</p>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="datalake-body"
      >
        <p className="datalake-body-instruction">
          Drag and drop a file here or click to select one.
        </p>
        <p style={{fontSize: '12px', color: 'red'}}>*Only .csv file is allowed</p>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button
          className="datalake-body-btn"
          onClick={() => {
            document.querySelector('input[type="file"]').click();
          }}
        >
          Choose File
        </button>
      </div>
      <p style={{ marginTop: '20px' }}>
        Selected File: {selectedFile ? selectedFile.name : 'None'}
      </p>
      <div className="datalake-body-datatype">
        <div className="datalake-body-datatype-label">Select file type: </div>
        <Form.Select
          aria-label="Category"
          value={dataType}
          onChange={handleSelect}
          className="datalake-body-datatype-form"
        >
          {
            dataTypeList && Object.keys(dataTypeList).map((item) => {
              return <option key={item} value={item}>{dataTypeList[item]}</option>
            })
          }
        </Form.Select>
      </div>
      { showError && <div style={{color:'red'}}>Please upload and choose correct data</div>}
      <button
        className={classnames('datalake-body-btn',
          { 'datalake-body-disabled': !selectedFile })}
        disabled={!selectedFile}
        onClick={handleUploadFile}
      >
        Upload file
      </button>
    </div>
  );
};

export default Datalake;
