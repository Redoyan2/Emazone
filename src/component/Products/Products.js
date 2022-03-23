import React from 'react';
import './Products.css';

const Products = (props) => {
    const{product, handleAddToCart}=props;
    const {name, img, price, seller, ratings }=product;
    return (
        <div className='card-body'>
            <div className='card-img'>
                <img src={img} alt="" srcset="" />
            </div>
            <div className='card-details'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacture: {seller}</p>
                <p><small>Ratings: {ratings}</small></p>
                
            </div>
            <button className='card-btn' onClick={()=>handleAddToCart(product)}>Add To Cart</button>
            
        </div>
    );
};

export default Products;