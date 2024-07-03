import React, {useState, useEffect} from "react";
import Product from "./ProductCard";

const ProductsContainer =  () => {
    // an array to store our data => useState
    const [products, setProducts] = useState([])

    // useEffect queries data from API to give us data
    useEffect(()=> {
        fetch("https://api.escuelajs.co/api/v1/products").then((response)=>{
            response.json().then((resp)=>{
                console.log(resp)
                setProducts(resp)
            })
        }).catch((err)=>{
            console.error(err)
        })
    }, [])
    return (
        <>
            <div className="container">
                <h1>Buy Now</h1>
                <div className="row justify-content-around">
                    {
                        products.map((product, index)=> {
                            return(
                                <div className="col-md-3 mb-3">
                                    <Product productData={product}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductsContainer