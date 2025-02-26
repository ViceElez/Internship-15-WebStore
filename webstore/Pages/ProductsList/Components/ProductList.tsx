import React, { useEffect, useState } from 'react';
import { Product } from './Product.tsx';
import '../Styles/ProductList.css';

interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number;
    quantity: number;
}


export const ProductList = () => {

    const [products, setProducts] = useState<ProductType[]>([]);

    const loadProducts = () => {
        const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
        setProducts(storedProducts);
    };

    useEffect(() => {
        loadProducts();

        const handleChange = () => {
            loadProducts();
        };  

        window.addEventListener('storage', handleChange);

        return () => {
            window.removeEventListener('storage', handleChange);
        };
    }, []);

    return(
        <div className='product-list-container'>
            <h1>Available Products</h1>
            <div className='search-bar'>
                    <input type="text" />
                </div>
            <div className="landing-page-filter">
                <span>Sort</span>
                <select
                    id="select-filter"
                >
                    <option value="Default">Default</option>
                    <option value="Category">Category</option>
                </select>
                <input
                    type="text"
                    id="category-input"
                    placeholder="Enter Product Category"
                    className="hidden"
                />
            </div>
            <div className="product-list">
                {products.map((product: ProductType) => (
                    <Product 
                    key={product.id} 
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}