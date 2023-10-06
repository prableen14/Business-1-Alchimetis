import React from "react";
import charts from "apexcharts";

import "./style.scss";

import UpTrend from "../../assets/Up Trend.svg";

export function RevenueHistogram() {
  return (
    <div className="revenue-histogram">
      <div className="revenue-histogram-header">
        <div className="revenue-histogram-value">
          <div>Revenue</div>
          <div>$8900.70</div>
        </div>

        <img
          src={UpTrend}
          alt="Up trend icon"
          className="revenue-histogram-header-icon"
        />
      </div>
    </div>
  );
}
