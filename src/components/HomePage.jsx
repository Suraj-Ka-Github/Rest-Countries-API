
import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import RestCountries from './RestCountries';
import countryData from "../assets/countries.json"

function HomePage({ theme }) {
    const [allCountries, setAllCountries] = useState(null);
    const [renderingCountries, setRenderingCountries] = useState([]);
    useEffect(() => {
            setAllCountries(countryData)
                setRenderingCountries(countryData);
    }, [])





    return (
        <div className='flex flex-col items-center'>
            <NavBar allCountries={allCountries} setRenderingCountries={setRenderingCountries} renderingCountries={renderingCountries} theme={theme} />

            <RestCountries theme={theme} renderingCountries={renderingCountries} />
        </div>

    )
}

export default HomePage