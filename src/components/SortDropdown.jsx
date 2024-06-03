import React from 'react'
import '../App.css'
import DropDown from './DropDown';

function SortDropdown({ setSortQuery }) {

  const sortOptions = ["Area-Ascending","Area-Descending",
  "Population-Ascending",
  "Population-Descending"]

  function sortCountry(e) {

    setSortQuery(e.target.value);
  }
  return (
    <DropDown defaultOption = {'Sort'} optionArray = {sortOptions} handleQueryOnChange = {sortCountry}  /> 

  )
}

export default SortDropdown

