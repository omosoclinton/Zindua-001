import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import axios from "axios";
import CountryCard from "./CountryCard";
import { Atom } from "react-loading-indicators";
const CountriesContainer = () => {
    const [countries, setCountries] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((resp)=>{
                setCountries(resp.data)
                setIsLoaded(true)
        }).catch(()=>{
            console.error(err)
        })
    })
// <Atom color="#32cd32" size="medium" text="" textColor="" />
    return (
        <>
            <NavBar/>
            <div className="container">
            <h1>{isLoaded? "Countries": null}</h1>
            <div className="row justify-content-around">
                {
                   isLoaded?  countries.map((country, index) => {
                    return (
                        <CountryCard country={country}/>
                    )
                }): <Atom color="#32cd32" size="medium" text="" textColor="" />
                }
            </div>
            </div>
        </>
    )
}

export default CountriesContainer