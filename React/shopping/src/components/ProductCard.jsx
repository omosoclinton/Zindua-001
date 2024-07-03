import React from "react";

const Product = ({productData})=> {
    // something
    console.log(productData.images[0])
    return(
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={productData.images[0].slice(2,-1)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{productData.title}</h5>
                        <h5>{productData.price}</h5>
                        <p className="card-text">Description: {productData.description}</p>
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
            </div>
        </>
    )
}

export default Product
