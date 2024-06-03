import React from 'react'
import '../App.css'
import DropDown from './DropDown';

function Region({setRegionQuery,setSubRegionsQuery,allCountries}) {
    function handleRegionChange(e) {
        setRegionQuery(e.target.value.toLowerCase())
        setSubRegionsQuery('')
      }
      const allRegions = allCountries.map((country) => country.region);
      const uniqueRegions  = [...new Set(allRegions)];
      console.log(allCountries);
      console.log("Hello");

  return (
    // <div className="regionDropdown shadow-md px-2 py-3">
    //     <select className='' id="region" onChange={(e) => { handleRegionChange(e) }}>
    //       <option value=''>Filter by Region</option>
    //       <option value="Africa">Africa</option>
    //       <option value="Americas">Americas</option>
    //       <option value="Asia">Asia</option>
    //       <option value="Europe">Europe</option>
    //       <option value="Oceania">Oceania</option>
    //       <option value="Antarctic">Antarctic</option>w-3/4
    //     </select>

    //   </div>

    <DropDown defaultOption = {'Filter by Region'} optionArray = {uniqueRegions} handleQueryOnChange = {handleRegionChange}  />
  )
}

export default Region