import React from "react";
import { Title, TextAndImage, MessagePreview } from "../../atoms/index.js";
import homeSvg from "../../assets/images/HomeDark.svg";
import { RevenueHistogram } from "../../atoms/RevenueHistogram/index.js";

const Dashboard = (props) => {
  return (
    <div>
      <Title title="Dashboard" size="large" subtitle={"Welcome back, Rahul"} />
      <Title title="Recent Messages" size="medium" />
      <TextAndImage
        imgSrc={homeSvg}
        title="Choose perfect product idea"
        date="Jan 18"
        time="5:00 pm"
      />
      <MessagePreview
        imgSrc="https://i.pinimg.com/originals/17/e1/7e/17e17e558fe2269e93b0412182301a69.jpg"
        title="Jenny Fox"
        message="Update on marketing campaign"
        time="2:32pm"
      />
      <MessagePreview
        imgSrc="https://i.pinimg.com/originals/17/e1/7e/17e17e558fe2269e93b0412182301a69.jpg"
        title="Jenny Fox"
        message="Update on marketing campaign"
        time="2:32pm"
      />
      <RevenueHistogram />
    </div>
  );
};

export default Dashboard;
