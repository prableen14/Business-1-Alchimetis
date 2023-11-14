const parseCsvToJson = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file provided"));
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target.result;
      const lines = text.split("\n");
      const headers = lines[0].split(",");
      const jsonArray = [];

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",");
        if (values.length !== headers.length) {
          reject(new Error("CSV format is not consistent."));
          return;
        }

        const entry = {};
        for (let j = 0; j < headers.length; j++) {
          entry[headers[j]] = values[j];
        }
        jsonArray.push(entry);
      }

      resolve(jsonArray);
    };

    reader.readAsText(file);
  });
};

const capitalizeFirstChar = str => {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const transformDateFormat = (inputDate) => {
    if (!inputDate) return
    var parts = inputDate.split('/');
    var month = parseInt(parts[0]);
    var day = parseInt(parts[1]);
    var year = parseInt(parts[2]);

    var date = new Date(year, month - 1, day);

    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var monthName = monthNames[date.getMonth()];

    var transformedDate = monthName + ' ' + year;

    return transformedDate;
}

const transformData = (data, typeInfo) => {
  const type = typeInfo.split("-")[0];
  const category = typeInfo.split("-")[1];
  const groupBy = typeInfo.split("-")[2];
  console.log(typeInfo);
  if (type === "e") {
    if (category === "co2") {
      switch (groupBy) {
        case "groups":
          return data.map((item) => {
            return {
              co2: parseFloat(item["CO2e  (t)"]),
              co2Prev: parseFloat(
                item["CO2e  (t)-Previous Period (Sep 2021 - Aug 2022)"]
              ),
              endPeriod: item["End Period"],
              group: item["Groups"],
              proportion: parseFloat(item["Proportion (%)"]),
              startPeriod: item["Start Period"],
              variance: parseFloat(item["Variance (%)"]),
            };
          });
        case "location":
          return data.map((item) => {
            return {
              co2: parseFloat(item["CO2e  (t)"]),
              co2Prev: parseFloat(
                item["CO2e  (t)-Previous Period (Sep 2021 - Aug 2022)"]
              ),
              endPeriod: item["End Period"],
              location: item["Locations"],
              proportion: parseFloat(item["Proportion (%)"]),
              startPeriod: item["Start Period"],
              variance: parseFloat(item["Variance (%)"]),
            };
          });
        //  break;
        case "scope":
          return data.map((item) => {
            return {
              proportion: parseFloat(item["Proportion (%)"]),
              measures: item.Measures,
            };
          });
        case "period":
          return data.map((item) => {
            return {
              date: item.Date,
              co2: parseFloat(item["CO2e (t)"]),
              co2Prev: parseFloat(item["CO2e (t)-Previous Period"]),
            };
          });
        case "datatype":
          return data.map(item => {
            return {
                measures: item.Measures,
                co2e: item['CO2e  (t)'],
                co2MontlyAve: item['CO2e  (t)-12 Mth Avg'],
                proportion: item['Proportion (%)'],
                variance: item['Variance (%)'],
                startPeriod: item['Start Period'],
                endPeriod: item['End Period']
            }
          })
        default:
          return false;
      }
    } else if (category === "energy") {
      switch (groupBy) {
        case 'period':
            return data.map(item => {
                return {
                    time: item.Month,
                    actual: parseFloat(item.Actual),
                    accrued: parseFloat(item.Accrued),
                    estimated: parseFloat(item.Estimated),
                    costPerGJ: parseFloat(item['Cost per GJ']),
                }
            })
        default:
          return false;
      }
    }
  }
  return 1;
};

const getDataByType = (data, type, category, group) => {
  return data.find(
    (item) =>
      item.type === type && item.category === category && item.groupBy === group
  );
};

const getInitials = (name) => {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0));

  return initials.join("").toUpperCase();
};

const getLatestData = (data, type, cateory, groupBy) => {
  const filteredData = data.filter(
    (item) =>
      item.type === type &&
      item.category === cateory &&
      item.groupBy === groupBy
  );

    const sortedData = filteredData.sort((a, b) => {
        // return new Date(a.createdDate) - new Date(b.createdDate)
        const dateA = a.createdDate.seconds * 1000000000 + a.createdDate.nanoseconds;
        const dateB = b.createdDate.seconds * 1000000000 + b.createdDate.nanoseconds;
      
        return dateB - dateA;
    });
    return sortedData[0];
}

export {
    parseCsvToJson,
    transformData,
    getLatestData, getInitials,
    getDataByType,
    transformDateFormat,
    capitalizeFirstChar
};
