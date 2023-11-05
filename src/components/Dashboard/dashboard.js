import React from "react";
import {
  Title,
  TextAndImage,
  MessagePreview,
  AreaGraph,
  LineGraph,
  Histogram,
  Table,
  PieChart,
  BarGraph,
} from "../../atoms/index.js";
import homeSvg from "../../assets/images/HomeDark.svg";
// import Histogram from "../../atoms/Histogram/index.js";
// import LineGraph from "../../atoms/LineGraph/index.js";
// import BarGraph from "../../atoms/BarGraph/index.js";
// import PieChart from "../../atoms/PieChart/index.js";
import "./style.scss";
import Summary from "../../data/Summary.json";
import DataSummary from "../../data/Data_summary.json";

// CSV Parser component and hook
import CsvInput from "../../atoms/CsvInput/CsvInput.jsx";
import useCsvParser from "../../hooks/useCsvParser.js";

const Dashboard = (props) => {
  // const { csv, setCSV } = useCsvParser('/temp.csv');

  const tableCol = [
    {
      dataField: "Data Type",
      text: "Type",
    },
    { dataField: "Unit", text: "Unit" },
    { dataField: "Amount", text: "Amount", sort: true },
    {
      dataField: "Energy Consumed  (GJ)",
      text: "Energy Consumed  (GJ)",
      sort: true,
    },
    {
      dataField: "Energy Produced (GJ)",
      text: "Energy Produced (GJ)",
      sort: true,
    },
    { dataField: "Cost (USD)", text: "Cost (USD)", sort: true },
  ];

  return (
    <div className='DashBoard'>
      <Title title='Dashboard' size='large' subtitle={"Welcome back, Rahul"} />

      <div className='analytics-group'>
        <Histogram
          values={[50, 60, 30, 70, 80, 90, 100, 20, 10]}
          label='Revenue'
          trend='up'
          color='blue'
        />

        <AreaGraph
          data={Summary}
          label='Accrued'
          dataKey={"Accrued"}
          xAxisDataKey={"Month"}
        />
        <LineGraph
          data={Summary}
          label='Estimated'
          dataKey={"Estimated"}
          xAxisDataKey={"Month"}
        />

        <PieChart
          data={[
            {
              name: "TEST_1",
              value: 40,
            },
            {
              name: "TEST_2",
              value: 35,
            },
            {
              name: "TEST_3",
              value: 20,
            },

            {
              name: "TEST_4",
              value: 5,
            },
          ]}
          label='Sales'
        />

        <BarGraph
          data={[
            {
              sales: 2400,
            },
            {
              sales: 1398,
            },
            {
              sales: 1000,
            },
            {
              sales: 3908,
            },
            {
              sales: 4800,
            },
            {
              sales: 3800,
            },
            {
              sales: 4300,
            },
            {
              sales: 3800,
            },
            {
              sales: 4300,
            },
          ]}
          label='Sales'
        />
      </div>
      <div style={{ padding: "10px", marginTop: "15px" }}>
        <Table data={DataSummary} columns={tableCol} />
      </div>

      <div className='notification'>
        <div className='notification_chatsub'>
          <Title title='Recent Messages' size='medium' />
          <div className='notification__chat'>
            <MessagePreview
              imgSrc='https://i.pinimg.com/originals/17/e1/7e/17e17e558fe2269e93b0412182301a69.jpg'
              name='Jenny Fox'
              message='Update on marketing campaign'
              time='2:32pm'
            />
            <MessagePreview
              imgSrc='https://i.pinimg.com/originals/17/e1/7e/17e17e558fe2269e93b0412182301a69.jpg'
              name='Jenny Fox'
              message='Update on marketing campaign'
              time='2:32pm'
            />
            <MessagePreview
              imgSrc='https://i.pinimg.com/originals/17/e1/7e/17e17e558fe2269e93b0412182301a69.jpg'
              name='Jenny Fox'
              message='Update on marketing campaign'
              time='2:32pm'
            />
            <MessagePreview
              imgSrc='https://i.pinimg.com/originals/17/e1/7e/17e17e558fe2269e93b0412182301a69.jpg'
              name='Jenny Fox'
              message='Update on marketing campaign'
              time='2:32pm'
            />
          </div>
        </div>
        <div className='notification_todosub'>
          <Title title='Your to-do list' size='medium' />
          <div className='notification__todo'>
            <TextAndImage
              imgSrc={homeSvg}
              title='Choose perfect product idea'
              date='Jan 18'
              time='5:00 pm'
            />
            <TextAndImage
              imgSrc={homeSvg}
              title='Choose perfect product idea'
              date='Jan 18'
              time='5:00 pm'
            />
            <TextAndImage
              imgSrc={homeSvg}
              title='Choose perfect product idea'
              date='Jan 18'
              time='5:00 pm'
            />
            <TextAndImage
              imgSrc={homeSvg}
              title='Choose perfect product idea'
              date='Jan 18'
              time='5:00 pm'
            />
            <TextAndImage
              imgSrc={homeSvg}
              title='Choose perfect product idea'
              date='Jan 18'
              time='5:00 pm'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
