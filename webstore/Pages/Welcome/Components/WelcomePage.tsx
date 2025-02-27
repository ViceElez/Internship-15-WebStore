import '../Styles/welcomePage.css';
import {ContainedButton} from '../Components/ContainedButton.tsx';
import { useEffect } from 'react';
import React from 'react';


export const WelcomePage=()=>{  

    const fetchProducts = () => {
        const dataFetched = localStorage.getItem('dataFetched');
        const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
         if (dataFetched === 'true' && existingProducts.length > 0) 
            return;
        
        
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((apiData) => {
                const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
                const mergedProducts = [...existingProducts, ...apiData];
    
                const uniqueProducts = mergedProducts.filter(
                    (product, index, self) =>
                        self.findIndex((p) => p.id === product.id) === index
                );

                localStorage.setItem('products', JSON.stringify(uniqueProducts));

                localStorage.setItem('dataFetched', 'true');
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchProducts();
    },[]);

    return(
        <div className='welcome-page'>
            <div className="title-div">
                <h1>MarketPlace</h1>
                <h2>Get All Shopping Done In One Place</h2>
            </div>
               <ContainedButton/>
        </div>
    );
}