import React from "react";
import "./style.scss";
import LeafIcon from "../../assets/images/companyLeaf.svg";
import HomeIcon from "../../assets/images/Home.svg";
import CustomersIcon from "../../assets/images/Customers.svg";
import AnalysticsIcon from "../../assets/images/Analytics.svg";
import ReportIcon from "../../assets/images/Report.svg";
import SettingIcon from "../../assets/images/Settings.svg";
import LogoutIcon from "../../assets/images/Logout.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase";

const SideNav = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const parts = location.pathname.split('/');
  const currLocation = parts[parts.length - 1];

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div id="sideNav">
      <div className="navTop">
        <div className="navTitle">
          <img src={LeafIcon} alt="leafIcon" id="leafIcon" />
          <span id="navHeading">Ecofocus</span>
        </div>
        <div className="navTile">
          <div
            className={`pagesNav ${
              currLocation === "dashboard" ? "current" : ""
            }`}
            onClick={() => currLocation !== "Dashboard" ? navigate("/dashboard") : null}
          >
            <img src={HomeIcon} alt="HomeIcon" />
            <span>Dashboards</span>
          </div>
          <div
            className={`pagesNav ${currLocation === "datalake" ? "current" : ""}`}
            onClick={() => currLocation !== "datalake" ? navigate("/datalake") : null}
          >
            <img src={CustomersIcon} alt="CustomerIcon" />
            <span>Data Lake</span>
          </div>
          <div
            className={`pagesNav ${currLocation === "report" ? "current" : ""}`}
            onClick={() => currLocation !== "report" ? navigate("/report") : null}
          >
            <img src={ReportIcon} alt="ReportIcon" />
            <span>Reports</span>
          </div>
          <div
            className={`pagesNav ${currLocation === "action" ? "current" : ""}`}
            onClick={() => currLocation !== "action" ? navigate("/action") : null}
          >
            <img src={AnalysticsIcon} alt="AnalysticsIcon" />
            <span>Action</span>
          </div>
        </div>
      </div>
      <div className="navBottom">
        <div
          className={`pagesNav ${currLocation === "setting" ? "current" : ""}`}
          onClick={() => currLocation !== "setting" ? navigate("/setting") : null}
        >
          <img src={SettingIcon} alt="SettingIcon" />
          <span>Settings</span>
        </div>
        <div className="pagesNav" onClick={handleLogout}>
          <img src={LogoutIcon} alt="SettingIcon" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
