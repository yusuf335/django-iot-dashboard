// pH gauge chart
// var dom = document.getElementById("gauge-chart-ph");
// var myPHChart = echarts.init(dom);
// var app = {};

// let phData = [
//   {
//     value: 0,
//   },
// ];

// var option;
// option = {
//   tooltip: {
//     formatter: "{a} <br/>{b} : {c}pH",
//   },
//   toolbox: {
//     feature: {
//       restore: { title: "Refresh" },
//       saveAsImage: { title: "Download Image" },
//     },
//   },
//   series: [
//     {
//       name: "pH",
//       type: "gauge",
//       detail: {
//         formatter: "{value} pH",
//         fontSize: 25,
//         offsetCenter: ["0", "70%"],
//       },
//       axisLine: {
//         lineStyle: {
//           color: [
//             [0.2, "#556ee6"],
//             [0.8, "#34c38f"],
//             [1, "#f46a6a"],
//           ],
//           width: 20,
//         },
//       },
//       data: phData,
//       max: 14,
//     },
//   ],
// };

// if (option && typeof option === "object") {
//   myPHChart.setOption(option, true);
// }

// Temperature gauge chart
// var dom = document.getElementById("gauge-chart-temperature");
// var myTemperatureChart = echarts.init(dom);
// var app = {};

// let temperatureData = [
//   {
//     value: 0,
//   },
// ];
// option = null;
// option = {
//   tooltip: {
//     formatter: "{a} <br/>{b} : {c}℃",
//   },
//   toolbox: {
//     feature: {
//       restore: { title: "Refresh" },
//       saveAsImage: { title: "Download Image" },
//     },
//   },
//   series: [
//     {
//       name: "Temperature",
//       type: "gauge",
//       detail: {
//         formatter: "{value} ℃",
//         fontSize: 25,
//         offsetCenter: ["0", "70%"],
//       },
//       axisLine: {
//         lineStyle: {
//           color: [
//             [0.2, "#556ee6"],
//             [0.5, "#34c38f"],
//             [1, "#f46a6a"],
//           ],
//           width: 20,
//         },
//       },
//       data: temperatureData,
//     },
//   ],
// };

// if (option && typeof option === "object") {
//   myTemperatureChart.setOption(option, true);
// }

// Turbidity gauge chart

// var dom = document.getElementById("gauge-chart-turbidity");
// var myTurbidityChart = echarts.init(dom);
// var app = {};

// let turbidityData = [
//   {
//     value: 0,
//   },
// ];
// option = null;
// option = {
//   tooltip: {
//     formatter: "{a} <br/>{b} : {c}NTU",
//   },
//   toolbox: {
//     feature: {
//       restore: { title: "Refresh" },
//       saveAsImage: { title: "Download Image" },
//     },
//   },
//   series: [
//     {
//       name: "Turbidity",
//       type: "gauge",
//       detail: {
//         formatter: "{value} NTU",
//         fontSize: 25,
//         offsetCenter: ["0", "70%"],
//       },
//       axisLine: {
//         lineStyle: {
//           color: [
//             [0.2, "#34c38f"],
//             [0.8, "#556ee6"],
//             [1, "#f46a6a"],
//           ],
//           width: 20,
//         },
//       },
//       data: turbidityData,
//       max: 1000,
//     },
//   ],
// };

// if (option && typeof option === "object") {
//   myTurbidityChart.setOption(option, true);
// }

// Ammonia gauge chart

// var dom = document.getElementById("gauge-chart-ammonia");
// var myAmmoniaChart = echarts.init(dom);
// var app = {};

// let ammoniaData = [
//   {
//     value: 0,
//   },
// ];
// option = null;
// option = {
//   tooltip: {
//     formatter: "{a} <br/>{b} : {c}ppm",
//   },
//   toolbox: {
//     feature: {
//       restore: { title: "Refresh" },
//       saveAsImage: { title: "Download Image" },
//     },
//   },
//   series: [
//     {
//       name: "Ammonia",
//       type: "gauge",
//       detail: {
//         formatter: "{value} ppm",
//         fontSize: 25,
//         offsetCenter: ["0", "70%"],
//       },
//       axisLine: {
//         lineStyle: {
//           color: [
//             [0.2, "#34c38f"],
//             [0.8, "#556ee6"],
//             [1, "#f46a6a"],
//           ],
//           width: 20,
//         },
//       },
//       data: ammoniaData,
//       max: 1000,
//     },
//   ],
// };

// if (option && typeof option === "object") {
//   myAmmoniaChart.setOption(option, true);
// }

// AJAX API CALL get last data for gauges
// This AJAX function is called from the template
// const getLastValues = async function (id) {
//   const request = await fetch(`http://127.0.0.1:8000/api/data/${id}`);
//   const value = await request.json();
//   const latest = value[value.length - 1];
//   const pH = latest.ph;
//   const temperature = latest.temperature;
//   const turbidity = latest.turbidity;
//   const ammonia = latest.ammonia;

// pH
//   phData[0].value = pH;
//   myPHChart.setOption({
//     series: [
//       {
//         data: phData,
//       },
//     ],
//   });

// Temperature
//   temperatureData[0].value = temperature;
//   myTemperatureChart.setOption({
//     series: [
//       {
//         data: temperatureData,
//       },
//     ],
//   });

// Turbidity
//   turbidityData[0].value = turbidity;
//   myTurbidityChart.setOption({
//     series: [
//       {
//         data: turbidityData,
//       },
//     ],
//   });

// Ammonia
//   ammoniaData[0].value = ammonia;
//   myAmmoniaChart.setOption({
//     series: [
//       {
//         data: ammoniaData,
//       },
//     ],
//   });
// };

//////////////////////////////////////////////////////////////////////

// Timestamp Chart

var dom = document.getElementById("area-chart-ph");
var myAreaChart = echarts.init(dom);
var app = {};

let pHDataByDate;
let temperatureDataByDate;
let turbidityDataByDate;
let ammoniaDataByDate;
let area_datetime;

var option;
option = {
  title: {
    text: "Stacked Line",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["pH", "Temperature", "Turbidity", "Ammonia"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: area_datetime,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "pH",
      type: "line",
      stack: "Total",
      data: pHDataByDate,
    },
    {
      name: "Temperature",
      type: "line",
      stack: "Total",
      data: temperatureDataByDate,
    },
    {
      name: "Turbidity",
      type: "line",
      stack: "Total",
      data: turbidityDataByDate,
    },
    {
      name: "Ammonia",
      type: "line",
      stack: "Total",
      data: ammoniaDataByDate,
    },
  ],
};

if (option && typeof option === "object") {
  myAreaChart.setOption(option);
}

const getDataByDate = async function (id) {
  const request = await fetch(`http://127.0.0.1:8000/api/data-by-date/${id}`);
  const value = await request.json();

  const mapPHData = value.map((x) => x.ph);
  const mapTemperatureData = value.map((x) => x.temperature);
  const mapTurbidityData = value.map((x) => x.turbidity);
  const mapAmmoniaData = value.map((x) => x.ammonia);
  const mapAreaDateTime = value.map((x) => x.date_time);

  const pHDataByDate = mapPHData;
  const temperatureDataByDate = mapTemperatureData;
  const turbidityDataByDate = mapTurbidityData;
  const ammoniaDataByDate = mapAmmoniaData;
  const area_datetime = mapAreaDateTime;

  myAreaChart.setOption({
    xAxis: {
      data: area_datetime,
    },
    series: [
      {
        data: pHDataByDate,
      },
      {
        data: temperatureDataByDate,
      },
      {
        data: turbidityDataByDate,
      },
      {
        data: ammoniaDataByDate,
      },
    ],
  });
};
