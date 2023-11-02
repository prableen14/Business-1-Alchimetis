import React from "react";
import "./App.scss";
import { Filter, Profile } from "./atoms/index.js";
import { SideNav } from "./molecules/index";
import Router from "./router/router";
import { useLocation } from "react-router-dom";

const App = (props) => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgot-password" || location.pathname === "/" ? null : (
        <>
          <SideNav page="Dashboard" />
          <div className="topnav">
            <div className={"topnav-content"}>
              <Filter />
              <Profile />
            </div>
          </div>
        </>
      )}
      <Router />
    </div>
  );
};

export default App;
