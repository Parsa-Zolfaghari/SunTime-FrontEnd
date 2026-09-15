//Strict Mode
"use strict"
//Global
const API_URL = "https://sun-time-project-backend-mu.vercel.app/api/products";
const containerOfProductsEl = document.querySelector('.last__product');
const getLoadingEL = document.querySelector('#productsLoader');
const getEmptyStateEl = document.querySelector('#productsEmptyState');
//Import Render Html Cart
import { createProductCard } from "../../Components/productCard.js";
//Add Create Product Function On HTml
const renderProducts = products => {
    products.forEach(element => {
        const createProduct = createProductCard(element);
        containerOfProductsEl.insertAdjacentHTML("beforeend", createProduct);
    });
}
//Fetch Data From BackEnd And Some Validation On It
async function getProducts() {
    getLoadingEL.style.display = "flex";
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        if (!response.ok) {
            throw new Error();
        }
        const data = result.data;
        if (!Array.isArray(data)) {
            throw new Error("Invalid data format: expected an array");
        }
        if (data.length === 0) {
            getEmptyStateEl.style.display = "flex";
            return;
        }
        renderProducts(data);
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: 'خطای محصول',
            text: 'خطا در دریافت محصولات',
            icon: 'error',
            timer: 3000
        })
    }
    finally {
        getLoadingEL.style.display = "none";
    }
}
getProducts();
