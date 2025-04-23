import React from "react";
import './navbar.css'

const Navbar = ({ onCategoryChange }) => {
    return (

        <>
        <div className="navbar" style={{fontSize:'35px',fontStyle:'italic', fontWeight:'lighter'}}>Apex Stores</div>
        <div className="navbar">
            <h1 style={{fontSize:'20px',fontStyle:'italic'}}>Categories :</h1>
            <button className="category-btn" onClick={() => onCategoryChange("all")}>All</button>
            <button className="category-btn" onClick={() => onCategoryChange("electronics")}>Electronics</button>
            <button className="category-btn" onClick={() => onCategoryChange("jewelery")}>Jewelery</button>
            <button className="category-btn" onClick={() => onCategoryChange("men's clothing")}>Men's Clothing</button>
            <button className="category-btn" onClick={() => onCategoryChange("women's clothing")}>Women's Clothing</button>
        </div>
    </>
    );
};

export default Navbar;
