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
    const[categorySearch, setCategorySearch] = useState<string>('');
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
    
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setCategorySearch(''); 
    };

    const handleCategorySearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategorySearch(e.target.value);
        setSearch(''); 
    };

    const selectFilter = document.getElementById('select-filter') as HTMLSelectElement;
    const categoryInput = document.getElementById('category-input') as HTMLInputElement;

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (selectFilter.value === 'Category') {
            categoryInput.classList.remove('hidden');
            categoryInput.focus();
        } else {
            categoryInput.classList.add('hidden');
            categoryInput.value = '';
            setCategorySearch('');
        }
        setSearch('');
    }

    let filteredProducts: ProductType[] = [];

    if(search!=='' && search!==null){
        filteredProducts=products.filter((product: ProductType) => {
            return product.title.toLowerCase().trim().includes(search.toLowerCase().trim());
        });
        
    }
    else if(categorySearch!=='' && categorySearch!==null){
        filteredProducts=products.filter((product: ProductType) => {
            return product.category.toLowerCase().trim().includes(categorySearch.toLowerCase().trim());
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
                    value={search}
                    onChange={handleSearchChange}
                    />
            </div>
            <div className="landing-page-filter">
                <span>Sort</span>
                <select
                    id="select-filter"
                    onChange={handleFilterChange}
                    >
                    <option value="Default">Default</option>
                    <option value="Category">Category</option>
                </select>
                <input
                    type="text"
                    id="category-input"
                    placeholder="Enter Product Category"
                    className="hidden"
                    value={categorySearch}
                    onChange={handleCategorySearchChange}
                />
            </div>
            {filteredProducts.length === 0 && <h3>No products found</h3>}
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