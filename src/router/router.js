import React, { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "../App.scss";
import { createBrowserHistory } from "history";

const Dashboard = lazy(() => import("../components/Dashboard/dashboard.js"));
const Login = lazy(() => import("../components/Login/login.js"));

class RouterClass extends Component {
  render() {
    const history = createBrowserHistory();
    console.log(history?.location);
    return (
      <div
        className={
          history?.location?.pathname === "/dashboard" ? "Pages" : "LoginPage"
        }
      >
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route exact path="/" element={<Login history={history} />} />
            <Route
              exact
              path="/dashboard"
              element={<Dashboard history={history} />}
            />
            <Route exact path="/login" element={<Login history={history} />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default RouterClass;
