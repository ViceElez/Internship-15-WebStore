import {addProduct} from '../Scripts/addProduct';
import { FormEvent, useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';
import BasicRating from './Rating';
import VariantButtonGroup from './GroupedButton';

export const AddProductPage=()=>{
    const [alert, setAlert] = useState<{ message: string; success: boolean } | null>(null);
    const [rating, setRating] = useState<number | null>(0);
    const [imageFile, setImageFile] = useState<string | null>(null);

    const notify = (message:string,success:boolean) =>{
        if(success)
            toast.success(`${message}`);
        else
            toast.error(`${message}`);
    } 

    useEffect(() => {
        if (alert) {
            notify(alert.message,alert.success);
        }
    }, [alert]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageFile(reader.result as string); 
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!imageFile) {
            setAlert({ message: "Please upload an image!", success: false });
            return;
        }
        const result = addProduct(e, rating ?? 0, imageFile);
        setAlert({ message: result.message, success: result.success });
        if (result.success) {
            (e.target as HTMLFormElement).reset();
            setRating(0);
            setImageFile(null); 
        }
    };
    return(
       <div className='add-product-page'>
            <nav>
                <VariantButtonGroup path1='/' buttonMessage1='Home' path2="/products" buttonMessage2='List All Products' />
            </nav>
            <header>
                <h1>Add Product</h1>
            </header>
        <div className='add-product-form'>
            <form 
            id='add-product-form'
            onSubmit={handleSubmit}
            >
            <input type="text" id="title" name="title" placeholder="Title" required />
            <input type="number" id="price" name="price" placeholder="Price" required />
            <input type="text" id="category" name="category" placeholder="Category" required />
            <input type="description" id="description" name="description" placeholder="Description" required />
            <input type="file" id="image" name="image" accept="image/*" onChange={handleImageUpload} required />
            <BasicRating rating={rating} setRating={setRating} />
            
            <button type="submit">Add Product</button>
            </form>
        </div>
        <Toaster/>
       </div>
    )
}
