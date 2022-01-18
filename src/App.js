import './App.scss';
import Nav from './components/Nav';
import MainDet from './components/MainDet';
import SearchBar from './components/SearchBar';
import CountryCont from './components/CountryCont';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { animateScroll as scroll } from 'react-scroll';
import { useParams,useLocation } from 'react-router-dom';

export const ApiContext=React.createContext();

export function App() {
  const [isDataFetch,setisDataFetch]=useState(false);
  const [apiData,setapiData]=useState({});
  const location=useLocation().pathname;
  const navRender=location.search(/^\/india*/gi);
  const params=useParams();
  useEffect(()=>{
    async function fetchData(){
      let {data}=await axios.get('https://api.covid19api.com/summary');
      data.Global.Country="Overall";
      data.Global.CountryCode="Overall";
      setapiData({
        countries:data["Countries"].sort((a,b)=>{return Math.random()-0.5}),
        global:data["Global"],
        date:data["Date"]
      });
      setisDataFetch(true);
    }
    fetchData();
  },[]);
  useEffect(()=>{
    scroll.scrollToTop({duration:500});
  },[params]);
  
  
  return (
    isDataFetch &&
    <div className="App">
      <ApiContext.Provider value={apiData}>
        <Nav/>
        <MainDet/>
        <SearchBar/>
        {(navRender===0)?'':<CountryCont/> }     
      </ApiContext.Provider>
    </div>
  );
}
