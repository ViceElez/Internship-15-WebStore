import React from 'react';
import {Link} from 'react-router-dom';

export const Product=({id, title, price}: {id:number, title: string, price: number }) => {
    return(
        <div className="product-card">
            <Link to={`/product/${id}`} className="product-link">
                <div className="product-info">
                    <h2>Product Information</h2>
                    <p>Product Title: {title}</p>
                    <p>Product Price: {price}$</p>
                </div>
                <div className="product-image">
                    <img src="../../../Assets/Images/temporaryImage.jpeg" alt="Product"/>
                </div>
            </Link>
        </div>
    )
}