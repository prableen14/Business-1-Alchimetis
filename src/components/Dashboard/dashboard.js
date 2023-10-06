import React from "react";
import { Title } from "../../atoms/index.js";
import {Filter} from "../../atoms/index.js";
const Dashboard = (props) => {
  return (
    <div>
    <Filter/>
      <Title title='Dashboard' size='large' subtitle={"Welcome back, Rahul"} />
      <Title title='Recent Messages' size='medium' />
    </div>
  );
};

export default Dashboard;
