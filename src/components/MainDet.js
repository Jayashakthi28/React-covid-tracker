import CountUp from "react-countup";
import CountryCard from "./CountryCard";
import { useParams, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../App";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import ReactLoading from "react-loading";

function apiFetch(url, setcountryData) {
  axios({
    method: "GET",
    url: url,
  })
    .then((res) => {
      setcountryData(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
}

function MainDet() {
  let country;
  let params = useParams();
  const pathName = useLocation().pathname;
  switch (pathName) {
    case "/":
      country = "Overall";
      break;
    case "/india":
      country = "india";
      break;
    default:
      country = params.country;
  }
  let url =
    country === "Overall"
      ? "https://covid19.mathdro.id/api/daily"
      : `https://api.covid19api.com/dayone/country/${country}`;
  let [countryData, setcountryData] = useState("");

  useEffect(() => {
    setcountryData([]);
    apiFetch(url, setcountryData);
  },
  // eslint-disable-next-line 
  [params]);

  let data = useContext(ApiContext);
  data =
    country === "Overall"
      ? data.global
      : data.countries.filter((t) => {
          let a = t.Country.toLowerCase();
          let b = country.toLowerCase();
          return a === b;
        });
  if (countryData) {
    data = data.length ? data[0] : data;
    let Infected;
    let Recovered;
    let Deaths;
    let dateArr;
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

    let totDeaths = +data?.TotalDeaths;
    let totConfirmed = +data?.TotalConfirmed;
    let newDeaths = +data.NewDeaths;
    let newConfiremed = +data.NewConfirmed;
    return (
      <>
        <div className="main-det" id="header">
          <div className="det-display">
            <CountryCard
              for="main-det"
              country={data.Country}
              country_code={data.CountryCode}
            />
            <div className="case-cont">
              <h2>Total Cases:</h2>
              <h2>
                <CountUp
                  start={0}
                  end={totConfirmed}
                  duration={1}
                  delay={1}
                  separator=","
                ></CountUp>
              </h2>
            </div>
            <div className="case-cont">
              <h2>Total Deaths:</h2>
              <h2>
                <CountUp
                  start={0}
                  end={totDeaths}
                  duration={1}
                  delay={1}
                  separator=","
                ></CountUp>
              </h2>
            </div>
            <div className="case-cont">
              <h2>New Cases:</h2>
              <h2>
                <CountUp
                  start={0}
                  end={newConfiremed}
                  duration={1}
                  delay={1}
                  separator=","
                ></CountUp>
              </h2>
            </div>
            <div className="case-cont">
              <h2>New Deaths:</h2>
              <h2>
                <CountUp
                  start={0}
                  end={newDeaths}
                  duration={1}
                  delay={1}
                  separator=","
                ></CountUp>
              </h2>
            </div>
          </div>
        </div>
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
      </>
    );
  }
  return <></>;
}

export default MainDet;
