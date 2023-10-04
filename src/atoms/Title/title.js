import React from "react";
import "./style.scss";
const Title = (props) => {
  return (
    <div>
      <div className={`title ${props?.size}`}>{props?.title}</div>
      <div>{props?.subtitle}</div>
    </div>
  );
};

export default Title;
