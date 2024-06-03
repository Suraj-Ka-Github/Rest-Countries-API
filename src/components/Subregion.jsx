import React, { useEffect } from 'react'
import countryData from "../assets/countries.json"
import '../App.css'
import DropDown from './DropDown';

function Subregion({ setSubRegionsQuery, regionQuery } = props) {
    let renderingCountries = countryData.filter(country => country.region.toLowerCase() === regionQuery)

    let subRegions = [];

    if (regionQuery != '') {
        console.log('here')
        let tempSubRegion = renderingCountries.reduce((acc, country) => {

            if (!acc.includes(country.subregion)) {
                acc.push(country.subregion)
            }
            return acc;
        }, [])

        subRegions = [...tempSubRegion];
    }
    function handleSubRegionChange(e) {
        setSubRegionsQuery(e.target.value.toLowerCase())
    }
    return (
     
 <DropDown defaultOption = {'Filter by Sub-Region'} optionArray = {subRegions} handleQueryOnChange = {handleSubRegionChange}  /> 
    )
}

export default Subregion