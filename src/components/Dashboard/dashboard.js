import React from "react";
import { Title, TextAndImage, MessagePreview } from "../../atoms/index.js";
import homeSvg from "../../assets/images/HomeDark.svg";
import Histogram from "../../atoms/Histogram/index.js";
import LineGraph from "../../atoms/LineGraph/index.js";
import BarGraph from "../../atoms/BarGraph/index.js";
import PieChart from "../../atoms/PieChart/index.js";
import "./style.scss";

// CSV Parser component and hook
import CsvInput from "../../atoms/CsvInput/CsvInput.jsx";
import useCsvParser from "../../hooks/useCsvParser.js";

const Dashboard = (props) => {
  const { csv, setCSV } = useCsvParser("/temp.csv");

  console.log(csv);

  return (
    <div className="DashBoard">
      <Title title="Dashboard" size="large" subtitle={"Welcome back, Rahul"} />
      <Title title="Recent Messages" size="medium" />

      <div className="analytics-group">
        <Histogram
          values={[50, 60, 30, 70, 80, 90, 100, 20, 10]}
          label="Revenue"
          trend="up"
          color="blue"
        />
        <Histogram
          values={[50, 60, 30, 70, 100, 100, 100, 20, 10]}
          label="Expenses"
          trend="down"
          color="purple"
        />

        <LineGraph
          data={[
            {
              day: "Monday",
              sales: 2400,
            },
            {
              day: "Tuesday",
              sales: 1398,
            },
            {
              day: "Wednesday",
              sales: 1000,
            },
            {
              day: "Thursday",
              sales: 3908,
            },
            {
              day: "Friday",
              sales: 4800,
            },
            {
              day: "Saturday",
              sales: 3800,
            },
            {
              day: "Sunday",
              sales: 4300,
            },
          ]}
          label="Sales"
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
          label="Sales"
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
          label="Sales"
        />
      </div>

      <div className="notification">
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
  );
};

export default Dashboard;
