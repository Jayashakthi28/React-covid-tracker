import './App.scss';
import Nav from './components/Nav';
import MainDet from './components/MainDet';
import SearchBar from './components/SearchBar';
import CountryCont from './components/CountryCont';
import {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  const [apiData,setapiData]=useState('');
  const [currData,setcurrData]=useState('');
  useEffect(async ()=>{
    let {data}=await axios.get('https://api.covid19api.com/summary');
    await setapiData(data);
    await setcurrData(data['Global']);
  },[]);
  console.log(currData,apiData);
  return (
    <div className="App">
      <Nav/>
      <MainDet data={currData}/>
      <SearchBar/>
      <CountryCont/>      
    </div>
  );
}

export default App;
