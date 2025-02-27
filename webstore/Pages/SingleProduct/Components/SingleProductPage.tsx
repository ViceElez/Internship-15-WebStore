import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/SingleProduct.css';
import VariantButtonGroup from '../../AddProduct/Components/GroupedButton';
import { Product } from '../../ProductsList/Components/Product';
import { ProductType } from '../../ProductsList/Components/ProductList';


export const SingleProductPage=() =>{
    const {id}= useParams();

    const existingProducts=JSON.parse(localStorage.getItem('products')||'[]');
    const product = existingProducts.find((p: { id: { toString: () => string | undefined; }; }) => p.id.toString() === id);

    const productsWithSameCategory = existingProducts.filter
    ((p: { category: string; id: { toString: () => string | undefined; }; }) =>
    p.category.toLowerCase().trim() === product.category.toLowerCase().trim() && p.id !== product.id);

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

            <h3>Products You May Like:</h3>
            <div className='products-like-container'>
                <div className='products-like'>
                        {productsWithSameCategory.map((product: ProductType) => (
                             <Link to={`/product/${product.id}`} key={product.id} className='product-like-link'>
                                <div className='product-like-card'>
                                        <div className='product-like-info'>
                                            <h2>Product Information</h2>
                                            <p>Product Title: {product.title}</p>
                                            <p>Product Price: {product.price}€</p>
                                        </div>
                                        <div className='product-like-image'>
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </>
    );
}