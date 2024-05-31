import React from 'react'
import '../App.css'

function SortDropdown({ setSortQuery }) {
  function sortCountry(query) {

    setSortQuery(query);
  }
  return (
    <div className="sortingDropdown shadow-md px-2 py-3">
      <select onChange={(e) => { sortCountry(e.target.value) }}>
        <option value=''>Sort</option>
        <option value="Area-Ascending">Sort By Area(ascending)</option>
        <option value="Area-Descending">Sort By Area(descending)</option>
        <option value="Population-Ascending">Sort By Population(ascending)</option>
        <option value="Population-Descending">Sort By Population(descending)</option>


      </select>

    </div>
  )
}

export default SortDropdown