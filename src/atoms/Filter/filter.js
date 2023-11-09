import React, { useState, useEffect, useRef } from "react";
import "./style.scss";
import FilterIcon from "../../assets/filter.svg";
import SearchIcon from "../../assets/search.svg";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const filterFrameRef = useRef(null);

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (filterFrameRef.current && !filterFrameRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleCheckboxClick = (e) => {
    e.stopPropagation(); 
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="filter-frame" onClick={handleFilterClick} ref={filterFrameRef}>
      <div className="filter-icon">
        <img src={SearchIcon} alt="Filter Icon" />
      </div>
      <div className="filter-text">Search</div>
      <div className={`filter-dropdown ${isOpen ? "open" : ""}`}>
        <label>
          <input type="checkbox" value="option1" onClick={handleCheckboxClick} />
          Location
        </label>
        <label>
          <input type="checkbox" value="option2" onClick={handleCheckboxClick} />
          Timeframe
        </label>
        <label>
          <input type="checkbox" value="option3" onClick={handleCheckboxClick} />
          Measures
        </label>
      </div>
    </div>
  );
};

export default Filter;
