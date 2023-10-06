import React from "react";
import "./style.scss";
import LeafIcon from "../../assets/images/companyLeaf.svg";
import HomeIcon from "../../assets/images/Home.svg";
import CustomersIcon from "../../assets/images/Customers.svg";
import AnalysticsIcon from "../../assets/images/Analytics.svg";
import ReportIcon from "../../assets/images/Report.svg";

const SideNav = (props) => {
  return (
    <div id='sideNav'>
      <div className='navTop'>
        <div className='navTitle'>
          <img src={LeafIcon} alt='leafIcon' id='leafIcon' />
          <span id='navHeading'>Ecofocus</span>
        </div>
        <div className='navTile'>
          <div
            className={`pagesNav ${
              props.page === "Dashboard" ? "current" : ""
            }`}
          >
            <img src={HomeIcon} alt='HomeIcon' />
            <span>Dashboards</span>
          </div>
          <div
            className={`pagesNav ${props.page === "DataLake" ? "current" : ""}`}
          >
            <img src={CustomersIcon} alt='CustomerIcon' />
            <span>Data Lake</span>
          </div>
          <div
            className={`pagesNav ${props.page === "Action" ? "current" : ""}`}
          >
            <img src={AnalysticsIcon} alt='AnalysticsIcon' />
            <span>Action</span>
          </div>
          <div
            className={`pagesNav ${props.page === "Reports" ? "current" : ""}`}
          >
            <img src={ReportIcon} alt='ReportIcon' />
            <span>Reports</span>
          </div>
        </div>
      </div>
      <div className='navBottom'>signout</div>
    </div>
  );
};

export default SideNav;
