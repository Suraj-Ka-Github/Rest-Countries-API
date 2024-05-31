import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext, themes } from '../context/themeContext';

import countryData from "../assets/countries.json"

function CountryDetail() {
    const [country, setCountry] = useState(null)


    const { name } = useParams();
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);


    useEffect(() => {
        const requiredCountry = countryData.filter((country) => country.name.common == name)
        setCountry(requiredCountry[0]);
    }, [])

    let leftArrow = <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
    const borderCountries = country?.borders?.map((borderCode) => {
        let countryName = countryData.find((country) => {
            return country.cca3 === borderCode;
        });
        return countryName.name.common;
    });

    return (
        <section className="flex mt-20 items-center justify-center">

            {!country ? <h1 className='text-gray-900 font-bold uppercase tracking-wide flex text-center h-screen text-4xl dark:text-white' >Loading...</h1> :
                <section className="w-[80rem] max-w-[90vw]">

                    <div onClick={() => navigate(-1)} className={`flex items-center mb-6 px-4 py-2 gap-2 bg-gray-200 max-w-24 justify-center shadow-md : hover:cursor-pointer ${theme == "dark" ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                        {leftArrow}
                        <button >Back</button>
                    </div>
                    <div className="flex gap-16 xl:gap-32">
                        <article className="">
                            <img className="max-w-[40rem] h-[20rem]" src={country.flags.svg} alt="Flag" />
                        </article>
                        <article className="flex flex-col  text-xs gap-[3rem]">
                            <h2 className="font-bold  text-2xl" >{country.name.common}</h2>
                            <div className="flex justify-between" >
                                <div>
                                    <ul className="flex flex-col items-start justify-start - gap-4 dark:text-gray-400 ">
                                        <li><strong>Native Name :</strong> {Object.values(country.name.nativeName || {})[0]?.common}</li>
                                        <li><strong>Population :</strong> {country.population}</li>
                                        <li><strong>Region :</strong> {country.region}</li>
                                        <li><strong>Sub Region :</strong> {country.subregion}</li>
                                        <li><strong>Capital :</strong> {country.capital}</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="flex flex-col items-start justify-start gap-3 dark:text-gray-400 ">
                                        <li><strong>Top Level Domain :</strong>{country.tld[0]}</li>
                                        <li><strong>Currencies :</strong> {(Object.values(country.currencies || { name: " " })[0].name)} </li>
                                        <li><strong>Languages :</strong> {Object.values(country.languages || {}).join(', ')}</li>

                                    </ul>
                                </div>

                            </div>


                            {country.borders && <div className=" flex gap-10  items-center">
                                <h3 className="font-bold" >Border Countries: </h3>

                                <ul className=" flex flex-wrap items-start justify-start gap-2" >
                                    {
                                        borderCountries?.map((border, index) => <li className={`border px-4 py-1 shadow ${theme == "dark" ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} key={index}> {border}</li>)
                                    }
                                </ul>

                            </div>}


                        </article>
                    </div>
                </section>}

        </section>
    )

}
export default CountryDetail;