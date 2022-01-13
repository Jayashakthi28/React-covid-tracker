import {BsSearch} from 'react-icons/bs';
function SearchBar(){
    return(
        <div className="searchbar">
            <input type="text" placeholder="Enter a city"/>
            <BsSearch className='searchicon'/>
        </div>
    )
}

export default SearchBar;