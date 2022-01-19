import CountUp from "react-countup";
import CountryCard from "./CountryCard";
import { useParams, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../App";
import axios from "axios";
import Graph from "./Graph";


  

export default function IndDet() {
    let params = useParams();
    const pathName = useLocation().pathname;
    let state=((pathName==="/india")?"total":params.state);
    console.log(useContext(ApiContext)[1].statewise)
    let [Maindata,setMaindata] =useState(useContext(ApiContext)[1].statewise);
    let [stateData, setstateData] = useState(Maindata.filter(t=>t.state.toLowerCase()===state.toLowerCase()));  
    let data;
    useEffect(() => {
        let currState=((pathName==="/india")?"total":params.state);
        setstateData(Maindata.filter(t=>t.state.toLowerCase()===state.toLowerCase()))
    },
    // eslint-disable-next-line 
    [params]);
    data=stateData[0];
    console.log(data);
      let totDeaths = +data?.deaths;
      let totConfirmed = +data?.confirmed;
      let recovered = +data?.recovered;
      return (
        <>
          <div className="main-det" id="header">
            <div className="det-display">
              <CountryCard
                for="main-det"
                country={(state==="total")?"India":state}
                country_code={"IN"}
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
                <h2>Total Recovered:</h2>
                <h2>
                  <CountUp
                    start={0}
                    end={recovered}
                    duration={1}
                    delay={1}
                    separator=","
                  ></CountUp>
                </h2>
              </div>
            </div>
          </div>
          <Graph stateData={stateData} pathName={pathName} country={state}/>
        </>
      );
}
