import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import CustomRouter from "./contexts/CustomRouter";
const history = createBrowserHistory({ forceRefresh: true });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CustomRouter history={history}>
    <App />
  </CustomRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
