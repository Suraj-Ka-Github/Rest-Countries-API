import React from 'react'
import '../App.css'

function Region({setRegionQuery,setSubRegionsQuery}) {
    function handleRegionChange(e) {
        setRegionQuery(e.target.value.toLowerCase())
        setSubRegionsQuery('')
      }
  return (
    <div className="regionDropdown shadow-md px-2 py-3">
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
  )
}

export default Region