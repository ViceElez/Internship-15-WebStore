import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/SingleProduct.css';
import VariantButtonGroup from '../../AddProduct/Components/GroupedButton';

export const SingleProductPage=() =>{
    const {id}= useParams();

    const existingProducts=JSON.parse(localStorage.getItem('products')||'[]');
    const product = existingProducts.find((p: { id: { toString: () => string | undefined; }; }) => p.id.toString() === id);

    const productsWithSameCategory = existingProducts.filter((p: { category: string; id: { toString: () => string | undefined; }; }) => p.category === product.category && p.id !== product.id);
    console.log(productsWithSameCategory);
    return(
        <>
            <nav>
                <VariantButtonGroup path1='/add-product' buttonMessage1='Add Product' path2="/products" buttonMessage2='Back' />
            </nav>
            <h1>{product.title}</h1>

            <div className='single-product-container'>
                <div className='single-product-image'>
                    <img src={product.image} alt={product.title} />
                    <p>Rating: {product.rating.rate} <span className='star-emoji'>⭐</span>({product.rating.count} reviews)</p>
                    
                </div>  

                <div className='single-product-info'>
                    <p>Price: {product.price}€</p>
                    <p>Category: {product.category}</p>
                    <p>Description: {product.description}</p>
                </div>
            </div>

            <div className='products-like-container'>
                <h3>Products You May Like:</h3>
                <div>
                    <p>
                    </p>
                </div>
            </div>
        </>
    );
}