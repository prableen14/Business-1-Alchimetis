import React, { lazy, useEffect } from "react";
import {
  Title,
  TextAndImage,
  MessagePreview,
  Table,
} from "../../atoms/index.js";
import { GraphCard } from "../../molecules/index.js";
import homeSvg from "../../assets/images/HomeDark.svg";
import "./style.scss";
import DataSummary from "../../data/Data_summary.json";
import UsernameDisplay from "../Utils/displayUsername.js";

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
    <div className='DashBoard'>
      <Title
        title='Dashboard'
        size='large'
        subtitle={`Welcome back  ${UsernameDisplay()}`}
      />

      <div className='analytics-group-card'>
        <div className='analytics-group-card-title'>Overview</div>
        <div className='analytics-group'>
          <GraphCard
            content={
              <HollowPieChart
                data={[
                  {
                    name: "Green",
                    value: 17,
                  },
                  {
                    name: "Yellow",
                    value: 5,
                  }
                ]}
              />
            }
            label='All'
          />

          <GraphCard
            content={
              <HollowPieChart
                data={[
                  {
                    name: "Green",
                    value: 9,
                  },
                  {
                    name: "Yellow",
                    value: 3,
                  }
                ]}
              />
            }
            label='Environment'
          />

          <GraphCard
            content={
              <HollowPieChart
                data={[
                  {
                    name: "Green",
                    value: 2,
                  },
                  {
                    name: "Yellow",
                    value: 2,
                  }
                ]}
                />
              }
            label="Social"
          />
          <GraphCard
            content={
              <HollowPieChart
                data={[
                  {
                    name: "Green",
                    value: 6,
                  }
                ]}
              />
            }
            label='Governance'
          />
        </div>
      </div>

      <div className='table-group'>
        <div className='table-group-title'>Cost breakdown</div>
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
