import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UseRestCountries from "../hooks/useRestCountries";
import '../App.css'


function RestCountries({ theme, renderingCountries }) {
    return (
        <>
            {!renderingCountries ? <h1 className='text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white' >Loading...</h1> :(renderingCountries.length == 0 ? <section className=''>
                No such countries found
            </section> : <section className=' dark:bg-gray-900 dark:text-white  w-[80rem] max-w-[90vw] flex flex-col content-center  justify-center self-center'>


                <div className=' max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10' >{
                    renderingCountries.map(country => {
                        return (
                            <Link to={`/country/${country.name.common}`}>
                                <div key = {country.name.common} className={`rounded-lg h-full overflow-hidden shadow ${theme == "dark" ? 'bg-gray-800 hover:bg-gray-700 ' : 'bg-white hover:bg-gray-200'}`}>
                                    <img className='h-48 w-full ' src={country.flags.png} alt="Flag" />

                                    <div className='p-4'>
                                        <h2 className={`font-bold text-lg mb-2 dark:text-white ${theme == "dark" ? 'text-white' : 'text-gray-900'}`}>{country.name.common}</h2>
                                        <ul className="flex flex-col items-start justify-start - gap-2 dark:text-gray-400">
                                            <li>population : {country.population}</li>
                                            <li>region : {country.region}</li>
                                            <li>capital : {country.capital}</li>

                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>)}
        </>
    )
}

export default RestCountries;