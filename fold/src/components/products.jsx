import React, { useState, useEffect } from "react";
import '../App.css';
import axios from 'axios';
import Navbar from '../components/navbar';
import Modal from '../components/proddetails';  
import Pp from '../assets/pro.jpg'

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all"); 
    const [showModal, setShowModal] = useState(false); 
    const [currentProduct, setCurrentProduct] = useState(null); 

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products"
        })
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []); 

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };


    let filteredProducts;

    if (selectedCategory === "all") {
        filteredProducts = data;
    } else {
        filteredProducts = data.filter((product) => product.category === selectedCategory);
    }

    const handleProductClick = (product) => {
        setCurrentProduct(product);
        setShowModal(true);  
    };


    const closeModal = () => {
        setShowModal(false);
        setCurrentProduct(null); 
    };

    return (
        <>
            <Navbar onCategoryChange={handleCategoryChange} />

            <div className="background">
                <h1>Welcome to<br></br> Apex Stores</h1>
            </div>

            <div className="products-container">
                {/* {loading && <h1>Loading...</h1>} */}

                {filteredProducts.map((product) => {
                    return (
                        <div key={product.id} className="card">
                            <img src={product.image} alt={product.title} />
                            <div className="card-description">
                                <h6>{product.title}</h6>
                                <h6>{`Price: $${product.price}`}</h6>
                                <h6>{`Category: ${product.category}`}</h6>
                                <button style={{width:'100px', height:'40px', borderRadius:'10px', backgroundColor:'black', color:'white'}} onClick={() => handleProductClick(product)}>
                                    View Details
                                </button>
                                <button className="carto">Add to cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>

        
            {showModal && <Modal product={currentProduct} closeModal={closeModal} />}
        </>
    );
};

export default Products;
