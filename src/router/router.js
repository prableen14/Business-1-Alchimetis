import React, { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "../App.scss";
import { createBrowserHistory } from "history";
import Spinner from "react-bootstrap/Spinner";

const Dashboard = lazy(() => import("../components/Dashboard/dashboard.js"));
const Login = lazy(() => import("../components/Login/login.js"));
const Register = lazy(() => import("../components/Login/register.js"));
const ForgotPassword = lazy(() =>
  import("../components/Login/forgot-password.js")
);
class RouterClass extends Component {
  render() {
    const history = createBrowserHistory();
    return (
      <div
        className={
          history?.location?.pathname === "/login" ||
          history?.location?.pathname === "/register" ||
          history?.location?.pathname === "/forgot-password" ||
          history?.location?.pathname === "/"
            ? "LoginPage"
            : "Pages"
        }
      >
        <Suspense
          fallback={
            <div className='Loader'>
              <Spinner animation='border' variant='primary' />
            </div>
          }
        >
          <Routes>
            <Route exact path='/' element={<Login history={history} />} />
            <Route
              exact
              path='/dashboard'
              element={<Dashboard history={history} />}
            />
            <Route exact path='/login' element={<Login history={history} />} />
            <Route
              exact
              path='/register'
              element={<Register history={history} />}
            />
            <Route
              exact
              path='/forgot-password'
              element={<ForgotPassword history={history} />}
            />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default RouterClass;
