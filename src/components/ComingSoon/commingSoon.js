import React, { useState } from "react";
import "./style.scss";
import UnderConstruction from "../../assets/images/under_construction.svg"

const ComingSoon = () => {

  return (
    <div className='comingSoon'>
      <img src={UnderConstruction} alt="coming-soon-img"/>
      <div className='comingSoon-title'>Coming Soon</div>
    </div>
  );
};

export default ComingSoon;
