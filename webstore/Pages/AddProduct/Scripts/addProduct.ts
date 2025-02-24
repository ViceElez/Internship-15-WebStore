import { FormEvent } from "react";

export function addProduct(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const products = JSON.parse(localStorage.getItem('products') || '[]');

    const titleInput = document.getElementById('title') as HTMLInputElement;
    const priceInput = document.getElementById('price') as HTMLInputElement;
    const categoryInput = document.getElementById('category') as HTMLInputElement;
    const descriptionInput = document.getElementById('description') as HTMLInputElement;
    const imageInput = document.getElementById('image') as HTMLInputElement;

    const title = titleInput.value.trim();
    if (title === "") {
        return {success: false, message: "Title can't be empty!" };
    }
    if (!isNaN(Number(title))) {
        return {success: false, message: "Title can't be all numbers!"};
    }

    const price = priceInput?.value;
    if (parseFloat(price) < 0) {
        return { success: false,message: "Price can't be negative!"};
    }

    const category = categoryInput?.value.trim();
    if (category === "") {
        return { success: false,message: "Category can't be empty!"};
    }
    if (!isNaN(Number(category))) {
        return {success: false,message: "Category can't be all numbers!" };
    }

    const description = descriptionInput?.value.trim();
    if (description === "") {
        return {success: false,message: "Description can't be empty!" };
    }
    if (!isNaN(Number(description))) {
        return {success: false,message: "Description can't be all numbers!" };
    }

    const image = imageInput?.value.trim();
    if (image === "") {
        return {success: false,message: "Image can't be empty!" };
    }
    if (!isNaN(Number(image))) {
        return {success: false,message: "Image can't be all numbers!" };
    }

    const productExists = products.some((product: any) =>
        product.title === title && product.price === price &&
        product.category === category && product.description === description &&
        product.image === image
    );
    if (productExists) {
        return {success: false,message: "Product already exists!" };
    }

    const newProduct = {
        id: products.length + 1,
        title,
        price,
        category,
        description,
        image
    };

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    return {success: true, message: "Product added successfully!"};
}