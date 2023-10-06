import React from "react";
import "./style.scss"; 

import FilterIcon from "../../assets/filter.svg"; 

const Filter = () => {
  return (
    <div className="filter-frame">
      <div className="filter-icon">
        <img src={FilterIcon} alt="Filter Icon" />
      </div>
      <div className="filter-text">Filters</div>
    </div>
  );
};

export default Filter;
