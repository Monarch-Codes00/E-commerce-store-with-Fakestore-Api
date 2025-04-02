
import React from 'react';
import './Modal.css';

const Modal = ({ product, closeModal }) => {
    if (!product) return null;  

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-btn" onClick={closeModal}><h1>X</h1></button>
                <div className="modal-content">
                    <img src={product.image} alt={product.title} className="modal-image" />
                    <h2>{product.title}</h2>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;

