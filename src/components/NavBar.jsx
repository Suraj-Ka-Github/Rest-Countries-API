import React, { useState, useEffect } from 'react'
import '../App.css'

function NavBar({ allCountries, setRenderingCountries, renderingCountries, theme }) {
  const [regionQuery, setRegionQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [subRegions, setSubRegions] = useState([]);
  const [subRegionsQuery, setSubRegionsQuery] = useState([]);

  const[areaQuery,setAreaState] = useState('');
  const[populationQuery,setPopulationState] = useState('');


  function handleRegionChange(e) {
    setRegionQuery(e.target.value.toLowerCase())
    let countries = [];
    if (searchQuery != '') {
      countries = allCountries.filter((country) => (country.name.common.toLowerCase().includes(searchQuery)) && country.region.toLowerCase().includes(e.target.value.toLowerCase()))
    }
    else {
      countries = allCountries.filter((country) => (country.region.toLowerCase().includes(e.target.value.toLowerCase())))
    }


    let tempSubRegion = countries.reduce((acc, country) => {
      if (!acc.includes(country.subregion)) {
        acc.push(country.subregion)
      }
      return acc;
    }, [])
    if (e.target.value == '') {
      setSubRegions('')
    }
    else setSubRegions(tempSubRegion)
    setRenderingCountries(countries);
  }

  function handleSubRegionChange(e) {
    setSubRegionsQuery(e.target.value.toLowerCase())
    console.log(renderingCountries);
    console.log(e.target.value.toLowerCase);
    let countries = allCountries.filter((country) => (country.name.common.toLowerCase().includes(searchQuery)) && country.region.toLowerCase().includes(regionQuery) && country.subregion.toLowerCase().includes(e.target.value.toLowerCase()))
    setRenderingCountries(countries);
  }


  function sortCountry(e) {
    let countries = []
    if (e.target.value === '') {
      return;
    }
    else if (e.target.value === "Area-Ascending") {
      countries = renderingCountries.sort((a, b) => {
        return (a.area - b.area)
      })
    }
    else if (e.target.value === "Area-Descending") {
      countries = renderingCountries.sort((a, b) => {
        return (b.area - a.area)
      })
    }
    else if (e.target.value === "Population-Ascending") {
      countries = renderingCountries.sort((a, b) => {
        return (a.population - b.population)
      })

    }

    else if (e.target.value === "Population-Descending") {
      countries = renderingCountries.sort((a, b) => {
        return (b.population - a.population)
      })

    }
    console.log(countries);
    setRenderingCountries([...countries]);


  }
  function sortByPopulation(e) {
    let countries = []
    if (e.target.value === '') {
      return;
    }
    else if (e.target.value === "Ascending") {
      countries = renderingCountries.sort((a, b) => {
        return (a.population - b.population)
      })
    }
    else if (e.target.value === "Descending") {
      countries = renderingCountries.sort((a, b) => b.population - a.population)

    }
    console.log(countries);
    setRenderingCountries([...countries]);


  }
  function onSearch(e) {
    setSearchQuery(e.target.value.toLowerCase());
    let searchedCountry = allCountries.filter((country) => (country.name.common.toLowerCase().includes(e.target.value.toLowerCase())));
    if (regionQuery != '') {
      if (subRegionsQuery != '') {
        searchedCountry = allCountries.filter((country) => (country.name.common.toLowerCase().includes(e.target.value.toLowerCase())) && country.region.toLowerCase().includes(regionQuery) && country.subregion.toLowerCase().includes(subRegionsQuery));
      }
      else {
        searchedCountry = allCountries.filter((country) => (country.name.common.toLowerCase().includes(e.target.value.toLowerCase())) && country.region.toLowerCase().includes(regionQuery));
      }
    }
    setRenderingCountries(searchedCountry);
  }
  const searchIcon = <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>

  return (
    <nav className='flex justify-between items-center my-6 w-[80rem] max-w-[90vw] '>
      <div className='flex w-4/12 items-center px-2 shadow-md py-3'>
        <i>{searchIcon}</i>
        <input onChange={(e) => { onSearch(e) }} className='px-2 w-full border-none outline-none' type="text" name="searchCountry" id="searchCountry" placeholder='search for a country' />
      </div>
      <div className="shadow-md px-2 py-3">
        <select onChange={(e) => { sortCountry(e) }}>
          <option value=''>Sort</option>
          <option value="Area-Ascending">Sort By Area(ascending)</option>
          <option value="Area-Descending">Sort By Area(descending)</option>
          <option value="Population-Ascending">Sort By Population(ascending)</option>
          <option value="Population-Descending">Sort By Population(descending)</option>


        </select>

      </div>
      <div className="shadow-md px-2 py-3">
        <select id="subRegion" onChange={(e) => { handleSubRegionChange(e) }} >
          <option value=''>Filter by Sub-Region</option>
          {subRegions.map((country) => <option value={country}>{country}</option>)}
        </select>
      </div>
      <div className="shadow-md px-2 py-3">
        <select className='' id="region" onChange={(e) => { handleRegionChange(e) }}>
          <option value=''>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antarctic</option>w-3/4
        </select>

      </div>


    </nav>

  )


}

export default NavBar