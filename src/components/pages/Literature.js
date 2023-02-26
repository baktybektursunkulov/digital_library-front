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
            <h1 align="center">Literature</h1>
        </div>
        <div class="products-grid grid">
                
			  	<figure class="product-style">
					<img src="https://readrate.com/img/pictures/book/295/29554/29554/w240h400-d7dc49bc.jpg" alt="Books" class="product-item"/>
					<figcaption>
						<h3>Portrait photography</h3>
						<p>Adam Silber</p>
						<div class="item-price">$ 40.00</div>
					</figcaption>
				</figure>

			  	<figure class="product-style">
					<img src="images/tab-item2.jpg" alt="Books" class="product-item"/>
					<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
					<figcaption>
						<h3>Once upon a time</h3>
						<p>Klien Marry</p>
						<div class="item-price">$ 35.00</div>
					</figcaption>
				</figure>

			  	<figure class="product-style">
					<img src="images/tab-item3.jpg" alt="Books" class="product-item"/>
					<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
					<figcaption>
						<h3>Tips of simple lifestyle</h3>
						<p>Bratt Smith</p>
						<div class="item-price">$ 40.00</div>
					</figcaption>
				</figure>

			  	<figure class="product-style">
					<img src="images/tab-item4.jpg" alt="Books" class="product-item"/>
					<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
					<figcaption>
						<h3>Just felt from outside</h3>
						<p>Nicole Wilson</p>
						<div class="item-price">$ 40.00</div>
					</figcaption>
				</figure>

			  	<figure class="product-style">
					<img src="images/tab-item5.jpg" alt="Books" class="product-item"/>
					<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
					<figcaption>
						<h3>Peaceful Enlightment</h3>
						<p>Marmik Lama</p>
						<div class="item-price">$ 40.00</div>
					</figcaption>
				</figure>

			  	<figure class="product-style">
					<img src="images/tab-item6.jpg" alt="Books" class="product-item"/>
					<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
					<figcaption>
						<h3>Great travel at desert</h3>
						<p>Sanchit Howdy</p>
						<div class="item-price">$ 40.00</div>
					</figcaption>
				</figure>

			  	<figure class="product-style">
					<img src="images/tab-item7.jpg" alt="Books" class="product-item"/>
					<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
					<figcaption>
						<h3>Life among the pirates</h3>
						<p>Armor Ramsey</p>
						<div class="item-price">$ 40.00</div>
					</figcaption>
				</figure>

			  	<figure class="product-style">
					<img src="images/tab-item8.jpg" alt="Books" class="product-item"/>
					<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
					<figcaption>
						<h3>Simple way of piece life</h3>
						<p>Armor Ramsey</p>
						<div class="item-price">$ 40.00</div>
					</figcaption>
				</figure>

	    	</div>
        <div className="text-center">

            {/* <div>
                {data.map(item => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div> */}
            <Link to="/home">
                <button className="primary-button">Back to Home</button>
            </Link>
        </div>
        </>
    )
}
