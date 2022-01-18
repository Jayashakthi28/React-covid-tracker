import { useRef, useState } from 'react';
import {BsSearch} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

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
    return(
        <div className="searchbar">
            <input type="text" value={searchState} placeholder="Enter a country" onChange={(e)=>{
                searchHandle(e,setsearchState,ref);
            }} onKeyDown={(e)=>{
                searchHandle(e,setsearchState,ref)}}/>
            <BsSearch className='searchicon' onClick={()=>{
                ref.current.click();
            }}/>
            <NavLink ref={ref} to={`/country/${searchState}`}></NavLink>
        </div>
    )
}

export default SearchBar;