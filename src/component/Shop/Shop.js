import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const[products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart = (products)=>{
        const newCart = [...cart, products]
        setCart(newCart);
       
    }



    return (
        <div className='shop'>
            <div className="products-details">
               {
                   products.map(product=><Products
                   key={product.id}
                   product={product}
                   handleAddToCart={handleAddToCart}

                   >

                   </Products>)
                   
               }

            </div>
            <div className="products-summary">
               <h2> Product Summary </h2>
               <h4>Selected Item: {cart.length}</h4>
               <h4>Total Price: {}</h4>
            </div>
        </div>
    );
};

export default Shop;