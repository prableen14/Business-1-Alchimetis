import React from "react";
import "./style.scss";
import Store from "../../assets/images/Store.svg";

const GraphCard = (props) => {
  return (
    <div className='graphCard'>
      <div className='graphCard-header'>
        <div className='graphCard-header-value-wrapper'>
          <div className='graphCard-header-title'>{props?.label}</div>
          <div className='graphCard-header-value'>{props?.sublabel}</div>
        </div>
{props?.image &&
        <img
          src={props?.image || Store}
          alt='card icon'
          className='graphCard-header-icon'
        />}
      </div>

      <div className='graphCard-chart'>{props?.content}</div>
    </div>
  );
};

export default GraphCard;
