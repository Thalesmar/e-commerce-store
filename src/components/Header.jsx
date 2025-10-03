import React from 'react';
import '../style.css';
import _search_icon_dark from '../assets/search-b.png';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="navbar" role="navigation" aria-label="Main">
      <h1 className="text-3xl font-semibold Logo">THALES</h1>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="search-box" role="search">
        <input type="text" placeholder="Search..." aria-label="Search products" />
        <img src={_search_icon_dark} alt="search icon" />
      </div>

      <div className="relative">
        <FaShoppingCart className="text-2xl cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          0
        </span>
      </div>
    </div>
  );
};

export default Header;
