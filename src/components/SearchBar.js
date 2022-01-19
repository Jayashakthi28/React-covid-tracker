import { useRef, useState } from 'react';
import {BsSearch} from 'react-icons/bs';
import { NavLink} from 'react-router-dom';
import { IsIndia } from './IsIndia';

function searchHandle(e,setsearchState,ref){
    if(!e.key){
        setsearchState(e.target.value);
    }
    else if(e.key==="Enter"){
        ref.current.click();
    }
}

function SearchBar(){
    const [searchState,setsearchState]=useState("");
    const ref=useRef();
    const regex=IsIndia();
    const txt=`Enter a ${(regex)?"State":"Country"}`;
    const toTxt=`${regex?"/india/":"/country/"}`
    return(
        <div className="searchbar">
            <input type="text" value={searchState} placeholder={txt} onChange={(e)=>{
                searchHandle(e,setsearchState,ref);
            }} onKeyDown={(e)=>{
                searchHandle(e,setsearchState,ref)}}/>
            <BsSearch className='searchicon' onClick={()=>{
                ref.current.click();
            }}/>
            <NavLink ref={ref} to={`${toTxt}${searchState}`}></NavLink>
        </div>
    )
}

export default SearchBar;