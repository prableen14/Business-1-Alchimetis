import React from "react";

import "./style.scss";

import UpTrend from "../../assets/images/Up Trend.svg";

export function RevenueHistogram() {
  const values = [50, 60, 30, 70, 80, 90, 100, 20, 10];
  const revenue = 8_900;

  return (
    <div className='revenue-histogram'>
      <div className='revenue-histogram-header'>
        <div className='revenue-histogram-header-value-wrapper'>
          <div className='revenue-histogram-header-title'>Revenue</div>
          <div className='revenue-histogram-header-value'>
            ${revenue.toLocaleString()}
          </div>
        </div>

        <img
          src={UpTrend}
          alt='Up trend icon'
          className='revenue-histogram-header-icon'
        />
      </div>

      <div className='revenue-histogram-chart'>
        {values.map((values, index) => (
          <div className='revenue-histogram-chart-bar-container' key={index}>
            <div
              className='revenue-histogram-chart-bar-container-bar'
              style={{ height: `${values}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
