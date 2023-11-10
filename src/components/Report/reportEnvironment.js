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
    console.log('result: ', result)
    setFinalData(result);
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
                data={getLatestData(data, "e", "co2", "location").data}
                dataKey={"proportion"}
                name={"location"}
                label={true}
              />
            }
            label='Activity by locations - Proportion'
          />
          <GraphCard
            content={
              <MultiFormGraph
                data={getLatestData(data, "e", "co2", "location").data}
                charts={[
                  { dataKey: "co2", type: "area" },
                  { dataKey: "co2Prev", type: "line" },
                ]}
                xaxisDataKey={"location"}
              />
            }
            label='Activity by Locations - Current and Previous CO2'
          />
     
        </div>

        <div className='reportEnvironment-block'>
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
          {/* <GraphCard
            content={
              <LineGraph
                data={getLatestData(data, "e", "energy", "datatype").data}
                dataKey={"Estimated"}
                dataKey2={"Actual"}
                xAxisDataKey={"time"}
                yAxisDataKey={"actual"}
                styles={{ fill: "#564ab1", stroke: "#564ab1" }}
              />
            }
            //   sublabel='esimation'
            label='Activity by datatype'
          /> */}
          <GraphCard
            content={
              <MultiFormGraph
                data={getLatestData(data, "e", "energy", "period").data}
                charts={[
                  { dataKey: "actual", type: "line" },
                  { dataKey: "estimated", type: "bar" },
                ]}
                styles={{"line": { fill: "#564ab1", stroke: "#564ab1" },
                          "bar": { fill: "#0bb197", stroke: "#0bb197" }}}
              />
            }
            label='Activity by datatype'
          />
        </div>
      </div>
    </div>
  );
};

export default ReportEnvironment;
