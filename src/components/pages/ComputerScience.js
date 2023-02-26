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
    

    return (
        <>
        <div>
        <h1 align="center">ComputerScience</h1>
        </div>
        <div className="text-center">

            <div>
                {data.map(item => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
            
            <Link to="/home">
                <button className="primary-button">Back to Home</button>
            </Link>
        </div>
        </>
    )
}
