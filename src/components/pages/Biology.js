import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Genres() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8075/direction')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);
    //console.log(data);
    

    return (
        <>
        <div>
        <h1 align="center">Biology</h1>
        </div>
        
        <div className="text-center">
        <div class="product">
                <div class="product-image">
                    <img src="https://readrate.com/img/pictures/book/295/29554/29554/w240h400-d7dc49bc.jpg" alt="Product Image" />
                </div>
                <div class="product-details">
                    <h2 class="product-title">Product Name</h2>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">Author</div>
                    <div class="product-price">Year</div>
                    <button class="product-button"> Скачать </button>
                </div>
            </div>
            <Link to="/home">
                <button className="primary-button">Back to Home</button>
            </Link>
        </div>
        </>
    )
}
