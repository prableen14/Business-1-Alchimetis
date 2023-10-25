import React, { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "../App.scss";
import { createBrowserHistory } from "history";

const Dashboard = lazy(() => import("../components/Dashboard/dashboard.js"));

class RouterClass extends Component {
  render() {
    const history = createBrowserHistory();

    return (
      <div className='Pages'>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route
              exact
              path='/dashboard'
              element={<Dashboard history={history} />}
            />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default RouterClass;
