import React from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
const CountryProfile = () => {
    const country = useLocation().state
    return (
        <>
            <NavBar/>
            <div className="country-profile">
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <img src={country.flags.png} alt="" />
                    </div>
                    <div className="col-md-6 mb-2">
                    <img src={country.coatOfArms.png} className="coatOfArms" alt="" />
                    </div>
                    <div className="col-12">
                        <h1>{country.name.official}</h1>
                        <h2>{country.capital}</h2>
                        <h3>{country.population}</h3>
                    </div>
                    <div className="col-6">
                        <h4>Borders</h4>
                       {
                         country.borders.map((border, index)=>{
                            return (
                                <>
                                <div>
                                    <h4>{border}</h4>
                                </div>
                                </>
                            )
                            
                         })
                       }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryProfile