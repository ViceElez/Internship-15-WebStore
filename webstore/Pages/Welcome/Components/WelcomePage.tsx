import '../Styles/welcomePage.css';
import {ContainedButton} from '../Components/ContainedButton.tsx';
import React, { useEffect } from 'react';

export const WelcomePage=()=>{  

    const fetchProducts =  () => { 
        fetch('https://fakestoreapi.com/products').
        then(response => response.json()).
        then(data=>localStorage.setItem('products',JSON.stringify(data)));
    }

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