import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
            <button className='card-btn' onClick={()=>handleAddToCart(product)}>
            <h4>Add To Cart</h4>
            <FontAwesomeIcon 
            icon={faShoppingCart}>
            </FontAwesomeIcon>
            </button>
            
            
        </div>
    );
};

export default Products;