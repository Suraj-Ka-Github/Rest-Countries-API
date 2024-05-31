import React, { useEffect } from 'react'
import countryData from "../assets/countries.json"
import '../App.css'

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
        <div className="subregionDropdown shadow-md px-2 py-3">
            <select id="subRegion" onChange={(e) => { handleSubRegionChange(e) }} >
                <option value='' key=''>Filter by Sub-Region</option>
                {subRegions ? subRegions.map((country) => <option value={country} key={country}>{country}</option>) : []}
            </select>
        </div>
    )
}

export default Subregion