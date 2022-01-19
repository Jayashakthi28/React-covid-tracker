import React from 'react';
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ReactLoading from "react-loading";

export default function Graph({countryData,pathName,country}) {
    let Infected;
    let Recovered;
    let Deaths;
    let dateArr;

    if (countryData) {
        switch (pathName) {
          case "/":
            Infected = countryData.map((d) => d?.totalConfirmed);
            Recovered = countryData.map((d) => d?.totalRecovered);
            Deaths = countryData.map((d) => d?.deaths?.total);
            dateArr = countryData.map((d) => d?.reportDate);
            break;
          case "/india":
            Infected = countryData.map((d) => d.Active);
            Recovered = countryData.map((d) => d.Recovered);
            Deaths = countryData.map((d) => d.Deaths);
            dateArr = countryData.map((d) => d.Date);
            break;
          default:
            Infected = countryData.map((d) => d.Active);
            Recovered = countryData.map((d) => d.Recovered);
            Deaths = countryData.map((d) => d.Deaths);
            dateArr = countryData.map((d) => d.Date);
            break;
        }
    
        if (country === "china" || countryData.length>1000) {
          Infected = [];
          Recovered = [];
          Deaths = [];
          dateArr = [];
          countryData.forEach((d, i) => {
            if (
              i !== countryData.length &&
              countryData[i]?.Date !== countryData[i + 1]?.Date
            ) {
              Infected.push(d.Active);
              Recovered.push(d.Recovered);
              dateArr.push(d.Date);
              Deaths.push(d.Deaths);
            }
          });
          console.log({ Infected, Recovered, dateArr, Deaths });
        }
    }

  return (
    <div className="graph-cont">
    {countryData ? (
      <Line
        data={{
          labels: dateArr,
          datasets: [
            {
              data: Infected,
              label: "Infected",
              borderColor: "rgba(0,0,255,0.5)",
              fill: true,
            },
            {
              data: Deaths,
              label: "Deaths",
              borderColor: "rgba(255,0,0,1)",
              fill: true,
            },
            {
              data: Recovered,
              label: "Recovered",
              borderColor: "rgba(0,255,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : (
      <ReactLoading
        type="bubbles"
        color="#0038FF"
        height={150}
        width={150}
      />
    )}
  </div>
  );
}
