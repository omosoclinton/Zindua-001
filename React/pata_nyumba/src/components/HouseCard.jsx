import React from "react";
import  house_image from '../assets/house_image.jpeg'

const HouseCard = () =>{
    let houseName = "3 Bed Room";
    let price = 100000

    function changePrice () {
        price = 200000
    }
    return(
        <>
        <div className="card" style={{width: "18rem", marginTop: "15px"}}>
            <img src= {house_image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Modern House</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <h5>Price: 2,000,000 ksh</h5>
                        <a href="#" className="btn btn-primary">Buy House</a>
                </div>
        </div>
        </>
    )
}
export default HouseCard