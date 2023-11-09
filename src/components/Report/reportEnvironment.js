import React, { useEffect, useState } from "react";
import "./style.scss";
import Summary from "../../data/Summary.json";
import { GraphCard } from "../../molecules/index.js";
import { AreaGraph, LineGraph } from "../../atoms/index.js";
import { getDataByType } from "../Utils/utils.js";

const ReportEnvironment = ({data}) => {
  const [finalData, setFinalData] = useState([])

  useEffect(() => {
    if (!data) return

    const groupedData = data.reduce((groups, item) => {
      const key = `${item.type}-${item.category}-${item.groupBy}`;
    
      if (!groups[key] || item.createdDate.seconds > groups[key].createdDate.seconds) {
        groups[key] = item;
      }
    
      return groups;
    }, {});
    
    // Convert the grouped data back to an array
    const result = Object.values(groupedData);
    setFinalData(result)

    //sample how to get the data out
    console.log('sample: ', getDataByType(result, 'e', 'co2', 'groups'))
  },[])

  return (
    <div className='reportEnvironment'>
      <div className='reportEnvironment-group'>
        <div className='reportEnvironment-block-title'>Carbon footprint</div>
        <div className='reportEnvironment-block'>
          <GraphCard
            content={
              <AreaGraph
                data={Summary}
                dataKey={"Accrued"}
                xAxisDataKey={"Month"}
                styles={{ fill: '#0bb197', stroke: '#0bb197' }}
              />
            }
            //   sublabel='esimation'
            label='Activity by groups'
          />
          <GraphCard
            content={
              <AreaGraph
                data={Summary}
                dataKey={"Accrued"}
                xAxisDataKey={"Month"}
                styles={{ fill: '#0bb197', stroke: '#0bb197' }}
              />
            }
            //   sublabel='esimation'
            label='Activity by groups'
          />
        </div>
      </div>
      <div className='reportEnvironment-group'>
        <div
          className='reportEnvironment-block-title'
          style={{ color: '#564ab1', borderColor: '#564ab1' }}>Energy Management</div>
        <div className='reportEnvironment-block'>
          <GraphCard
            content={
              <LineGraph
                data={Summary}
                dataKey={"Estimated"}
                xAxisDataKey={"Month"}
                styles={{ fill: '#564ab1', stroke: '#564ab1' }}
              />
            }
            //   sublabel='esimation'
            label='Activity by scope'
          />
        </div>
      </div>
    </div>
  );
};

export default ReportEnvironment;
