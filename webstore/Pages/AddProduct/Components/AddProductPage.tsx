import React from 'react';

export const AddProductPage=()=>{
    return(
       <div className='add-product-page'>
            <nav>
            </nav>


            <header>
                <h1>Add Product</h1>
            </header>
        <div className='add-product-form'>
            <form id='add-product-form'>
            <input type="text" id="title" name="title" placeholder="Title" required />
            <input type="number" id="price" name="price" placeholder="Price" required />
            <input type="text" id="category" name="category" placeholder="Category" required />
            <input type="description" id="description" name="description" placeholder="Description" required />
            <input type="text" id='image' name='image'  placeholder='Image' />
            
            <button type="submit">Add Car</button>
            </form>
        </div>


       </div>
    )
}

//u nav doalze ova dva botuna s povratkon