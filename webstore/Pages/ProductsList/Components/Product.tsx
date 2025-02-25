import React from 'react';

export const Product=({ title, price, description, category, image }: { title: string, price: string, description: string, category: string, image: string }) => {
    return(
        <div className="product-card">
            <div className="product-info">
                <h2>Product Information</h2>
                <p>Product Title:{title}</p>
                <p>Product Price:{price}$</p>
            </div>
            <div className="product-image">
                <img src="../../../Assets/Images/temporaryImage.jpeg" alt="Product"/>
            </div>
        </div>
    )
}