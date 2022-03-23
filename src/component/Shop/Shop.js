import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const[products, setProducts] = useState([])
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])


    return (
        <div className='shop'>
            <div className="products-details">
               <h1>Products Details </h1>

            </div>
            <div className="products-summary">
               <h2> Product Summary </h2>
            </div>
        </div>
    );
};

export default Shop;