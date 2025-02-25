import React, { useEffect, useState } from 'react';
import { Product } from './Product.tsx';
import '../Styles/ProductList.css';

interface ProductType {
    id: number;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
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
            <div className="product-list">
                {products.map((product: ProductType) => (
                    <Product 
                    key={product.id} 
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}