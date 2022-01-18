import CountryCard from "./CountryCard";
import { NavLink } from "react-router-dom";
import {ApiContext} from "../App";
import { useCallback, useContext, useRef, useState } from "react";
import useCountrySearch from "./useCountrySearch";

function CountryCont() {

  const countryCont=useRef();
  const data=useContext(ApiContext).countries;
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
        if(i+1===retArr.length){
          return(
            <NavLink ref={lastCountryCall} className={"flag-boxer"} to={`/country/${t.Country}`} key={t.Country}>
              <CountryCard
                key={t.CountryCode}
                for="cc"
                country={t.Country}
                country_code={t.CountryCode}
                data={t}
              />
            </NavLink>
          )
        }
        else{
          return(
            <NavLink className={"flag-boxer"} to={`/country/${t.Country}`} key={t.Country}>
              <CountryCard
                key={t.CountryCode}
                for="cc"
                country={t.Country}
                country_code={t.CountryCode}
                data={t}
              />
            </NavLink>
          )
        }  
      })}
    </div>
  );
}

export default CountryCont;
