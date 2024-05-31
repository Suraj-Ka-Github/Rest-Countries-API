
import React, { useState, useEffect } from 'react'
import RestCountries from './RestCountries';
import countryData from "../assets/countries.json"
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import Subregion from './Subregion';
import Region from './Region';

function HomePage() {
  
  const [allCountries, setAllCountries] = useState([]);
  const [regionQuery, setRegionQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [subRegionsQuery, setSubRegionsQuery] = useState('');
  const [sortQuery, setSortQuery] = useState('');

  useEffect(() => {
    setAllCountries(countryData)
  }, [])




  let renderingCountries = allCountries.filter(country => country?.region?.toLowerCase() === regionQuery || regionQuery === '').filter(country => country?.subregion?.toLowerCase() === subRegionsQuery || subRegionsQuery === '').filter(country => country?.name.common.toLowerCase().includes(searchQuery))
  if (sortQuery === "Area-Ascending") {
    renderingCountries = renderingCountries.sort((a, b) => {
      return (a.area - b.area)
    })
  }
  else if (sortQuery === "Area-Descending") {
    renderingCountries = renderingCountries.sort((a, b) => {
      return (b.area - a.area)
    })
  }
  else if (sortQuery === "Population-Ascending") {
    renderingCountries = renderingCountries.sort((a, b) => {
      return (a.population - b.population)
    })

  }

  else if (sortQuery === "Population-Descending") {
    renderingCountries = renderingCountries.sort((a, b) => {
      return (b.population - a.population)
    })

  }


  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-between items-center my-6 w-[80rem] max-w-[90vw]' >
        <SearchBar setSearchQuery={setSearchQuery} />
        <SortDropdown setSortQuery={setSortQuery} />
        <Subregion setSubRegionsQuery={setSubRegionsQuery} regionQuery={regionQuery} />
        <Region setRegionQuery={setRegionQuery} setSubRegionsQuery={setSubRegionsQuery} />
      </div>
      {/* <NavBar allCountries={allCountries} setRenderingCountries={setRenderingCountries} renderingCountries={renderingCountries} theme={theme} /> */}

      <RestCountries renderingCountries={renderingCountries} />
    </div>

  )
}

export default HomePage