import React from 'react'
import Papa from 'papaparse'

const CsvInput = () => {

  const [ data, setData ] = React.useState(null)

  const handleParser = (files) => {
    if (files) {
      console.log(files[0]);
      Papa.parse(files[0], {
        complete: function(results) {
          console.log("Finished:", results.data);
          setData(results.data)
        }}
      )
    }
  }
  return (
    <div>
      <input type="file" accept=".csv,.xlsx,.xls" onChange={(e) => handleParser(e.target.files)}/>
      { data && data.map((row, index) => {
          return (
            <div key={index}>
              {row.map((col, index) => {
                return (
                  <span key={index}>{col}</span>
                )
              })}
            </div>
          )
        })
      }
    </div>
  )
}

export default CsvInput