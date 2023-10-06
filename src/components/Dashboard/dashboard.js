import React from "react";
import {Filter} from "../../atoms/index.js";
import { Title, TextAndImage, MessagePreview } from "../../atoms/index.js";
import homeSvg from "../../assets/images/HomeDark.svg";
import { RevenueHistogram } from "../../atoms/RevenueHistogram";
import "./style.scss";

const Dashboard = (props) => {
  return (
    <div>
    <Filter/>
      <Title title='Dashboard' size='large' subtitle={"Welcome back, Rahul"} />
      <Title title='Recent Messages' size='medium' />
      <TextAndImage
        imgSrc={homeSvg}
        title='Choose perfect product idea'
        date='Jan 18'
        time='5:00 pm'
      />
      <MessagePreview
        imgSrc='https://i.pinimg.com/originals/17/e1/7e/17e17e558fe2269e93b0412182301a69.jpg'
        title='Jenny Fox'
        message='Update on marketing campaign'
        time='2:32pm'
      />
      <Title title="Dashboard" size="large" subtitle={"Welcome back, Rahul"} />
      <Title title="Recent Messages" size="medium" />

      <RevenueHistogram />

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
