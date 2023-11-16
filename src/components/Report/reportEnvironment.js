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
  Table,
} from "../../atoms/index.js";
import { getDataByType, getLatestData } from "../Utils/utils.js";

const co2TableCol = [
  {
    dataField: "measures",
    text: "Measures",
  },
  {
    dataField: "co2e",
    text: "Co2e",
  },
  {
    dataField: "co2MontlyAve",
    text: "CO2e  (t)-12 Mth Avg",
  },
  {
    dataField: "proportion",
    text: "Proportion (%)",
  },
  {
    dataField: "variance",
    text: "Variance (%)",
  },
  {
    dataField: "startPeriod",
    text: "Start Period",
  },
  {
    dataField: "endPeriod",
    text: "End Period",
  },
];

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
  }, []);
  return (
    <div className="reportEnvironment">
      <div className="reportEnvironment-group">
        <div className="reportEnvironment-block-title">Carbon footprint</div>
        <div className="reportEnvironment-block">
          <GraphCard
            content={
              <MultiFormGraph
                data={getLatestData(data, "e", "co2", "groups").data}
                charts={[
                  { dataKey: "co2", type: "bar", name: "co2" },
                  { dataKey: "co2Prev", type: "line", name: "co2 previous" },
                ]}
                xaxisDataKey={"group"}
              />
            }
            label="Activity by groups - Current and Previous CO2"
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
            label="Activity by groups - Proportion"
          />
        </div>
        <div className="reportEnvironment-block">
          <GraphCard
            content={
              <PieChart
                data={getLatestData(data, "e", "co2", "location").data}
                dataKey={"proportion"}
                name={"location"}
                label={true}
              />
            }
            label="Activity by locations - Proportion"
          />
          <GraphCard
            content={
              <MultiFormGraph
                data={getLatestData(data, "e", "co2", "location").data}
                charts={[
                  { dataKey: "co2", type: "area", name: "co2" },
                  { dataKey: "co2Prev", type: "line", name: "co2 previous" },
                ]}
                xaxisDataKey={"location"}
              />
            }
            label="Activity by Locations - Current and Previous CO2"
          />
        </div>

        <div className="reportEnvironment-block">
          <GraphCard
            content={
              <BarGraph
                data={getLatestData(data, "e", "co2", "period").data}
                dataKey={"co2"}
                name={"measures"}
                twoBars={true}
                dataKey2={"co2Prev"}
                radius={0}
                name2={"co2 previous"}
              />
            }
            label="Activity by scope - Current and Previous CO2"
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
            label="Activity by scope- Proportion"
          />
        </div>
        {getLatestData(data, "e", "co2", "datatype") && (
          <div className="reportEnvironment-table-group">
            <div className="reportEnvironment-table-group-title">
              CO2 Emission by group
            </div>
            <Table
              data={getLatestData(data, "e", "co2", "datatype").data}
              columns={co2TableCol}
            />
          </div>
        )}
      </div>
      <div className="reportEnvironment-group">
        <div
          className="reportEnvironment-block-title"
          style={{ color: "#564ab1", borderColor: "#564ab1" }}
        >
          Energy Management
        </div>
        <div className="reportEnvironment-block">
          <GraphCard
            content={
              <MultiFormGraph
                data={getLatestData(data, "e", "energy", "period").data}
                charts={[
                  { dataKey: "estimated", type: "bar" },
                  { dataKey: "actual", type: "line" },
                ]}
                styles={{
                  line: { fill: "#0bb197", stroke: "#0bb197" },
                  bar: { fill: "#564ab1", stroke: "#564ab1" },
                }}
                xaxisDataKey={"time"}
              />
            }
            label="Energy consumed (GJ)"
          />
        </div>
      </div>
    </div>
  );
};

export default ReportEnvironment;
