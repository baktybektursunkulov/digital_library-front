import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import  myConst  from './HomePage';

 
console.log(myConst);
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
        <div className="text-center">

            <div>
                {data.map(item => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
            <h1 className="main-title home-page-title">Construction</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
