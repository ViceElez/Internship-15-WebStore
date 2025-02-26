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
    rating: {
        rate: number;
        count: number;
    }
}


export const ProductList = () => {
    const[search, setSearch] = useState<string>('');
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

    const sortedProducts=products.slice().sort((a: ProductType, b: ProductType) =>b.rating.rate-(a.rating.rate));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    let filteredProducts: ProductType[] = [];
    if(search!==''){
        filteredProducts=products.filter((product: ProductType) => {
            return product.title.toLowerCase().trim().includes(search.toLowerCase().trim());
        });
    }
    else{
        filteredProducts=sortedProducts.slice(0, 20);
    }

    return(
        <div className='product-list-container'>
            <h1>Available Products</h1>
            <div className='search-bar'>
                    <input 
                    type="text" 
                    placeholder='Search...' 
                    onChange={handleChange}
                    />
            </div>
            <div className="landing-page-filter">
                <span>Sort</span>
                <select id="select-filter">
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
            {[...filteredProducts].sort((a, b) => b.rating.rate-(a.rating.rate)) 
                .map((product: ProductType) => (
                    <Product 
                    key={product.id} 
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}