import React from "react";
import "./style.scss";
import Summary from "../../data/Summary.json";
import { GraphCard } from "../../molecules/index.js";
import { AreaGraph, LineGraph } from "../../atoms/index.js";

const ReportEnvironment = () => {

  return (
    <div className='reportEnvironment'>
      <div className='reportEnvironment-block'>
        <div className='reportEnvironment-block-title'>CO2</div>
        <GraphCard
          content={
            <AreaGraph
              data={Summary}
              dataKey={"Accrued"}
              xAxisDataKey={"Month"}
              styles={{fill:'#0bb197', stroke:'#0bb197'}}
            />
          }
        //   sublabel='esimation'
          label='Activity by groups'
        />
      </div>
      <div className='reportEnvironment-block'>
        <div className='reportEnvironment-block-title' style={{color:'#564ab1', borderColor: '#564ab1'}}>Energy</div>
        <GraphCard
          content={
            <LineGraph
              data={Summary}
              dataKey={"Estimated"}
              xAxisDataKey={"Month"}
              styles={{fill:'#564ab1', stroke:'#564ab1'}}
            />
          }
        //   sublabel='esimation'
          label='Activity by scope'
        />
      </div>
    </div>
  );
};

export default ReportEnvironment;
