
import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import RestCountries from './RestCountries';

function HomePage({ theme }) {
    const [allCountries, setAllCountries] = useState(null);
    const [renderingCountries, setRenderingCountries] = useState([]);
    useEffect(() => {
        fetch('src/assets/countries.json')
            .then(response => response.json())
            .then(json => {
                setAllCountries(json)
                setRenderingCountries(json);
            })
            .catch(error => console.log(error))
    }, [])





    return (
        <div className='flex flex-col items-center'>
            <NavBar allCountries={allCountries} setRenderingCountries={setRenderingCountries} renderingCountries={renderingCountries} theme={theme} />

            <RestCountries theme={theme} renderingCountries={renderingCountries} />
        </div>

    )
}

export default HomePage