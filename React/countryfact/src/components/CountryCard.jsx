import React, {useState} from "react";
import { Atom } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";
// <ThreeDot color="#32cd32" size="medium" text="" textColor="" />

function CountryCard ({country}){
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const viewMore = () => {
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
            navigate('/country-profile', {state:country})
        }, 2000)
    }
    return (
        <>
            <div className="card mb-3" style={{ width: '18rem' }}>
                <img src={country.flags.png} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{country.name.official}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a role='button' onClick={viewMore} href="#" className="btn btn-primary">
                        {
                            isLoading?<ThreeDot color="#32cd32" size="medium" text="" textColor="" />: 'View More'

                        }
                    </a>
                </div>
            </div>
        </>
    )
}

export default CountryCard 