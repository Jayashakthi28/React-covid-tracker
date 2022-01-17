import './App.scss';
import Nav from './components/Nav';
import MainDet from './components/MainDet';
import SearchBar from './components/SearchBar';
import CountryCont from './components/CountryCont';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [isDataFetch,setisDataFetch]=useState(false);
  const [apiData,setapiData]=useState({});
  // const [currData,setcurrData]=useState('');

  useEffect(()=>{
    async function fetchData(){
      let {data}=await axios.get('https://api.covid19api.com/summary');
      data.Global.Country="Overall";
      data.Global.CountryCode="Overall";
      setapiData({
        countries:data["Countries"],
        curr:data["Global"],
        date:data["Date"]
      });
      setisDataFetch(true);
    }
    fetchData();
  },[]);
  console.log(apiData);
  return (
    isDataFetch &&
    <div className="App">
      <Nav/>
      <MainDet data={apiData.curr}/>
      <SearchBar/>
      <CountryCont data={apiData.countries} setter={{setapiData,apiData}}/>      
    </div>
  );
}

export default App;
