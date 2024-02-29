import { useState } from "react";
import SearchResultslist from './searchResultslist'

const SearchBar = ({getWeather,geoWeather}) => {
    const [inputList,setInputList] = useState("");
  const handleInput = (event) => {
    setInputList(event.target.value);
  }
  const handleClick = (data) => {
    getLocation(data)
} 

  const getLocation = (location) => {
    getWeather(location)
    setInputList("")
  }



    return (<>

<div className="heading">
     <h3>Weather App</h3>

     </div>

     <div className="search-bar">
      <div className='search-icon'></div>
      <input type="text" className='input-field' value={inputList} placeholder='Search for location' onChange={handleInput} />
      <div className='location-icon' onClick={geoWeather}></div>
     </div>
     <div className='result-box'> 
     <SearchResultslist weatherLocation={getLocation} data={{inputList}} setList={setInputList} handleClick={handleClick} />
     </div>


    </>)
}

export default SearchBar;