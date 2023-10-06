import React from "react";
import { Title } from "../../atoms/index.js";
import {Filter} from "../../atoms/index.js";
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
    </div>
  );
};

export default Dashboard;
