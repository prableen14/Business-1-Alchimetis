import React, { useEffect, useState } from "react";
import "./style.scss";
import Summary from "../../data/Summary.json";
import { GraphCard } from "../../molecules/index.js";
import {
  AreaGraph,
  LineGraph,
  PieChart,
  BarGraph,
  MultiFormGraph,
} from "../../atoms/index.js";
import { getDataByType, getLatestData } from "../Utils/utils.js";

const ReportEnvironment = ({ data }) => {
  const [finalData, setFinalData] = useState([]);

  useEffect(() => {
    if (!data) return;

    const groupedData = data.reduce((groups, item) => {
      const key = `${item.type}-${item.category}-${item.groupBy}`;

      if (
        !groups[key] ||
        item.createdDate.seconds > groups[key].createdDate.seconds
      ) {
        groups[key] = item;
      }

      return groups;
    }, {});

    // Convert the grouped data back to an array
    const result = Object.values(groupedData);
    setFinalData(result);

    //sample how to get the data out
    // console.log("sample: ", getDataByType(result, "e", "co2", "groups"));
  }, []);
  return (
    <div className='reportEnvironment'>
      <div className='reportEnvironment-group'>
        <div className='reportEnvironment-block-title'>Carbon footprint</div>
        <div className='reportEnvironment-block'>
          <GraphCard
            content={
              <MultiFormGraph
                data={getLatestData(data, "e", "co2", "groups").data}
                charts={[
                  { dataKey: "co2", type: "line" },
                  { dataKey: "co2Prev", type: "bar" },
                ]}
                xaxisDataKey={"group"}
              />
            }
            label='Activity by groups - Current and Previous CO2'
          />
          <GraphCard
            content={
              <PieChart
                data={getLatestData(data, "e", "co2", "groups").data}
                dataKey={"proportion"}
                name={"group"}
                label={true}
              />
            }
            label='Activity by groups - Proportion'
          />
        </div>

        <div className='reportEnvironment-block'>
          <GraphCard
            content={
              <PieChart
                data={getLatestData(data, "e", "co2", "scope").data}
                dataKey={"proportion"}
                name={"measures"}
                label={true}
              />
            }
            label='Activity by scope- Proportion'
          />
          <GraphCard
            content={
              <BarGraph
                data={getLatestData(data, "e", "co2", "period").data}
                dataKey={"co2"}
                name={"measures"}
                twoBars={true}
                dataKey2={"co2Prev"}
                radius={0}
              />
            }
            label='Activity by scope - Current and Previous CO2'
          />
        </div>
      </div>
      <div className='reportEnvironment-group'>
        <div
          className='reportEnvironment-block-title'
          style={{ color: "#564ab1", borderColor: "#564ab1" }}
        >
          Energy Management
        </div>
        <div className='reportEnvironment-block'>
          <GraphCard
            content={
              <LineGraph
                data={Summary}
                dataKey={"Estimated"}
                xAxisDataKey={"Month"}
                styles={{ fill: "#564ab1", stroke: "#564ab1" }}
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
