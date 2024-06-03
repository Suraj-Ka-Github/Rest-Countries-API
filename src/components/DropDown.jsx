import React from 'react'
import '../App.css'
function DropDown({defaultOption,optionArray,handleQueryOnChange}) {
    console.log(optionArray);
  return (
    <select className='dropdown shadow-md px-2 py-3' onChange={(e) => { handleQueryOnChange(e) }} >
                <option value='' key=''>{defaultOption}</option>
                {optionArray ? optionArray?.map((option) => <option value={option} key={option}>{option}</option>) : []}
            </select>
  )
}

export default DropDown