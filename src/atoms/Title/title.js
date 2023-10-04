import React from "react";
import "./style.scss";
const Title = (props) => {
  return (
    <div className='title'>
      <div className={`main-title ${props?.size}`}>{props?.title}</div>
      <div className='subtitle'>{props?.subtitle}</div>
    </div>
  );
};

export default Title;
