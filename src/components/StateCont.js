import CountryCard from "./CountryCard";
import { NavLink } from "react-router-dom";
import {ApiContext} from "../App";
import { useCallback, useContext, useRef, useState } from "react";
import useCountrySearch from "./useCountrySearch";

export default function StateCont() {
    const countryCont=useRef();
  const data=useContext(ApiContext)[1].statewise;
  const [arrNum,setarrNum]=useState(6);
  const {
    retArr
  }=useCountrySearch(data,arrNum);

  const observer=useRef();

  const lastCountryCall=useCallback(node=>{
    if(observer.current) observer.current.disconnect();
    observer.current=new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){
        setarrNum(prevNum=>prevNum+6);
      }
    });
    if(node) observer.current.observe(node);
  },[]);

  return (
    <div className="country-cont" ref={countryCont}>
      {retArr.map((t,i) => {
        if(t.state==="Total"){
            return ''
        }
        if(i+1===retArr.length){
          return(
            <NavLink ref={lastCountryCall} className={"flag-boxer"} to={`/india/${t.state}`} key={t.state}>
              <CountryCard
                key={t.state}
                for="cc"
                country={t.state}
                country_code={t.statecode}
                data={t}
              />
            </NavLink>
          )
        }
        else{
          return(
            <NavLink className={"flag-boxer"} to={`/india/${t.state}`} key={t.state}>
              <CountryCard
                key={t.state}
                for="cc"
                country={t.state}
                country_code={t.statecode}
                data={t}
              />
            </NavLink>
          )
        }  
      })}
    </div>
  );
}
