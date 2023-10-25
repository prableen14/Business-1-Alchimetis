import React from "react";

import "./style.scss";

import UpTrend from "../../assets/images/Up Trend.svg";
import DownTrend from "../../assets/images/Down Trend.svg";

export default function Histogram({ values, label, trend, color }) {
  return (
    <div className="histogram">
      <div className="histogram-header">
        <div className="histogram-header-value-wrapper">
          <div className="histogram-header-title">{label}</div>
          <div className="histogram-header-value">
            $
            {values
              .reduce((prev, curr) => prev + curr, 0)
              .toFixed(2)
              .toLocaleString()}
          </div>
        </div>

        <img
          src={trend === "up" ? UpTrend : DownTrend}
          alt="Up trend icon"
          className="histogram-header-icon"
        />
      </div>

      <div className="histogram-chart">
        {values.map((values, index) => (
          <div className="histogram-chart-bar-container" key={index}>
            <div
              className={`histogram-chart-bar-container-bar-${color}`}
              style={{ height: `${values}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
