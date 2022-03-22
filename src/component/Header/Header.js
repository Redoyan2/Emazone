import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <img src={Logo} alt="" />
                <div className='nav-link'>
                    <a href="shop">Shop</a>
                    <a href="order">Order</a>
                    <a href="order-review">Order Review</a>
                    <a href="manage-inventory">Manage Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;