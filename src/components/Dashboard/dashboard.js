import React from "react";

import "./style.scss";

import {
  Title,
  TextAndImage,
  MessagePreview,
  Table,
} from "../../atoms/index.js";
import { GraphCard } from "../../molecules/index.js";
import homeSvg from "../../assets/images/HomeDark.svg";
import DataSummary from "../../data/Data_summary.json";
import UsernameDisplay from "../Utils/displayUsername.js";
import HollowPieChart from "../../atoms/HollowPieChart/index.js";
import { capitalizeFirstChar } from "../Utils/utils.js";

const Dashboard = (props) => {
  const tableCol = [
    {
      dataField: "goal",
      text: "Goal",
    },
    { dataField: "classification", text: "Classification" },
    { dataField: "status", text: "Status" },
    {
      dataField: "progress",
      text: "Progress",
      sort: true,
    },
    {
      dataField: "off-track goals",
      text: "Off-track goals",
      sort: true,
    },
    { dataField: "off-track targets", text: "Off-track targets", sort: true },
    { dataField: "overdue metrics", text: "Overdue metrics", sort: true },
    {
      dataField: "non-compliant policies",
      text: "Non-compliant policies",
      sort: true,
    },
    { dataField: "high risk", text: "High risk", sort: true },
    { dataField: "failed controls", text: "Failed controls", sort: true },
  ];

  return (
    <div className="DashBoard">
      <Title
        title="Dashboard"
        size="medium"
        subtitle={`Welcome back  ${capitalizeFirstChar(UsernameDisplay())}`}
      />

      <div className="analytics-group-card">
        <div className="analytics-group-card-title">Statuses</div>
        <div className="analytics-group">
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
                  },
                ]}
              />
            }
            label="All"
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
                  },
                ]}
              />
            }
            label="Environment"
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
                  },
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
                  },
                ]}
              />
            }
            label="Governance"
          />
        </div>
      </div>

      <div className="table-group">
        <div className="table-group-title">Top Level Goals Summary</div>
        <Table data={DataSummary} columns={tableCol} />
      </div>

      <div className="notification">
        <div className="notification_chatsub">
          <Title title="Recent Messages" size="medium" />
          <div className="notification__chat">
            <MessagePreview
              imgSrc="https://api.dicebear.com/7.x/thumbs/svg?seed=Jenny+Fox"
              name="Jenny Fox"
              message="Governance project 101."
              time="2:32pm"
            />
            <MessagePreview
              imgSrc="https://api.dicebear.com/7.x/thumbs/svg?seed=Jason"
              name="Jason"
              message="Carbon emission report."
              time="2:32pm"
            />
            <MessagePreview
              imgSrc="https://api.dicebear.com/7.x/thumbs/svg?seed=Jimmy"
              name="Jimmy"
              message="Policies are great!"
              time="2:32pm"
            />
            <MessagePreview
              imgSrc="https://api.dicebear.com/7.x/thumbs/svg?seed=Eli"
              name="Eli"
              message="New project upcoming to uproot governance."
              time="2:32pm"
            />
          </div>
        </div>
        <div className="notification_todosub">
          <Title title="Your to-do list" size="medium" />
          <div className="notification__todo">
            <TextAndImage
              imgSrc={homeSvg}
              title="Choose a policy to invest in"
              date="Jan 18"
              time="5:00 pm"
            />
            <TextAndImage
              imgSrc={homeSvg}
              title="Choose an industry to disrupt"
              date="Jan 18"
              time="5:00 pm"
            />
            <TextAndImage
              imgSrc={homeSvg}
              title="Discussion on environmental policies"
              date="Jan 18"
              time="5:00 pm"
            />
            <TextAndImage
              imgSrc={homeSvg}
              title="Address social concerns"
              date="Jan 18"
              time="5:00 pm"
            />
            <TextAndImage
              imgSrc={homeSvg}
              title="Social uprising in X country"
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
