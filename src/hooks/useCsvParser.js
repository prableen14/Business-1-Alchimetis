import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const useCsvParser = (filepath='') => {

  const [csv, setCSV] = useState([]);

  useEffect(() => {
    fetch(filepath)
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true }).data;
        setCSV(parsedData);
      });
  }, [filepath])

  return {
    csv,
    setCSV
  }

}

export default useCsvParser;