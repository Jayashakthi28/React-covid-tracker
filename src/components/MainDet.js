import CountUp from "react-countup";
import CountryCard from "./CountryCard";
import { useParams, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../App";
import axios from "axios";
import Graph from "./Graph";

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
  country=(pathName==="/")?"Overall":params.country;
  let urlCountry;
  urlCountry=country.replace('(','');
  urlCountry=urlCountry.replace(')','');
  let url =
    country === "Overall"
      ? "https://covid19.mathdro.id/api/daily"
      : `https://api.covid19api.com/dayone/country/${urlCountry}`;
  let [countryData, setcountryData] = useState("");

  useEffect(() => {
    setcountryData([]);
    apiFetch(url, setcountryData);
  },
  // eslint-disable-next-line 
  [params]);

  let data = useContext(ApiContext)[0];
  data =
    country === "Overall"
      ? data.global
      : data.countries.filter((t) => {
          let a = t.Country.toLowerCase();
          let b = country.toLowerCase();
          return a === b;
        });
    data=data[0]||data;

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
        <Graph countryData={countryData} pathName={pathName} country={country}/>
      </>
    );
}

export default MainDet;
