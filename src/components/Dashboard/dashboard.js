import React, { useEffect } from "react";
import {
  Title,
  TextAndImage,
  MessagePreview,
  Table,
} from "../../atoms/index.js";
import { GraphCard } from "../../molecules/index.js";
import homeSvg from "../../assets/images/HomeDark.svg";
import "./style.scss";
import Summary from "../../data/Summary.json";
import DataSummary from "../../data/Data_summary.json";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase.js";

import UsernameDisplay from "../../utils/displayUsername.js";
// CSV Parser component and hook
import CsvInput from "../../atoms/CsvInput/CsvInput.jsx";
import useCsvParser from "../../hooks/useCsvParser.js";
import HollowPieChart from "../../atoms/HollowPieChart/index.js";
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
    <div className="DashBoard">
      <Title
        title="Dashboard"
        size="large"
        subtitle={`Welcome back  ${UsernameDisplay()}`}
      />

      <div className="analytics-group-card">
        <div className="analytics-group-card-title">Overview</div>
        <div className="analytics-group">
          <GraphCard
            content={
              <HollowPieChart
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
              />
            }
            sublabel="estimation"
            label="Accrued"
          />

          <GraphCard
            content={
              <HollowPieChart
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
                    name: "TEST_4",
                    value: 5,
                  },
                  {
                    name: "TEST_3",
                    value: 20,
                  },
                ]}
              />
            }
            sublabel="estimation"
            label="Estimated"
          />

          <GraphCard
            label="Sales"
            sublabel="estimation"
            dataKey={"value"}
            content={
              <HollowPieChart
                data={[
                  {
                    name: "TEST_2",
                    value: 35,
                  },
                  {
                    name: "TEST_3",
                    value: 20,
                  },
                  {
                    name: "TEST_1",
                    value: 40,
                  },
                  {
                    name: "TEST_4",
                    value: 5,
                  },
                ]}
              />
            }
          />
          <GraphCard
            sublabel="estimation"
            content={
              <HollowPieChart
                data={[
                  {
                    name: "TEST_2",
                    value: 35,
                  },
                  {
                    name: "TEST_1",
                    value: 40,
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
              />
            }
            label="Sales"
          />
        </div>
      </div>

      <div className="table-group">
        <div className="table-group-title">Cost breakdown</div>
        <Table data={DataSummary} columns={tableCol} />
      </div>

      <div className="notification">
        <div className="notification_chatsub">
          <Title title="Recent Messages" size="medium" />
          <div className="notification__chat">
            <MessagePreview
              imgSrc="https://i.pinimg.com/originals/17/e1/7e/17e17e558fe2269e93b0412182301a69.jpg"
              name="Jenny Fox"
              message="Update on marketing campaign"
              time="2:32pm"
            />
            <MessagePreview
              imgSrc="https://i.pinimg.com/originals/17/e1/7e/17e17e558fe2269e93b0412182301a69.jpg"
              name="Jenny Fox"
              message="Update on marketing campaign"
              time="2:32pm"
            />
            <MessagePreview
              imgSrc="https://i.pinimg.com/originals/17/e1/7e/17e17e558fe2269e93b0412182301a69.jpg"
              name="Jenny Fox"
              message="Update on marketing campaign"
              time="2:32pm"
            />
            <MessagePreview
              imgSrc="https://i.pinimg.com/originals/17/e1/7e/17e17e558fe2269e93b0412182301a69.jpg"
              name="Jenny Fox"
              message="Update on marketing campaign"
              time="2:32pm"
            />
          </div>
        </div>
        <div className="notification_todosub">
          <Title title="Your to-do list" size="medium" />
          <div className="notification__todo">
            <TextAndImage
              imgSrc={homeSvg}
              title="Choose perfect product idea"
              date="Jan 18"
              time="5:00 pm"
            />
            <TextAndImage
              imgSrc={homeSvg}
              title="Choose perfect product idea"
              date="Jan 18"
              time="5:00 pm"
            />
            <TextAndImage
              imgSrc={homeSvg}
              title="Choose perfect product idea"
              date="Jan 18"
              time="5:00 pm"
            />
            <TextAndImage
              imgSrc={homeSvg}
              title="Choose perfect product idea"
              date="Jan 18"
              time="5:00 pm"
            />
            <TextAndImage
              imgSrc={homeSvg}
              title="Choose perfect product idea"
              date="Jan 18"
              time="5:00 pm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
