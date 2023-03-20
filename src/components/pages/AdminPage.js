import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Genres() {


    const [file, setFile] = useState(null);
    const [picture, setPicture] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [year, setYear] = useState();
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setErrorMessage('Please choose a file to upload.');
      return;
    }
    if (!picture) {
        setErrorMessage('Please choose a file to upload.');
        return;
      }
    try {
      const formData = new FormData();
      formData.append('picture',picture)
      formData.append('file', file);
       formData.append('author',author);
       formData.append('year',year);
       formData.append('title',title)
       formData.append('description',description)

      const response = await fetch('http://localhost:8075/file/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      } else {
        // Handle successful file upload
        console.log('File uploaded successfully.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

    return (
        <>
            <div>
                <h1 align="center">Admin Page </h1>
            </div>

            <div className="text-center">

                <div>
                    <form onSubmit={handleSubmit}>
                        {errorMessage && <div>{errorMessage}</div>}
                        <p>
                            <label>Title</label><br />
                            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                        </p>
                        <p>
                            <label>Author</label><br />
                            <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
                        </p>
                        <p>
                            <label>Year</label><br />
                            <input type="number" value={year} onChange={(event) => setYear(event.target.value)} />
                        </p>
                        <p>
                            <label>Description</label><br />
                            <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
                        </p>
                        <p>
                            Choose a pdf file:
                            <input type="file" onChange={(event) => setFile(event.target.files[0])} />
                        </p>
                        <p>
                            Choose a jpg picture:
                            <input type="file" onChange={(event) => setPicture(event.target.files[0])} />
                        </p>
                        <p>
                        <button type="submit">Upload</button>
                        </p>
                    </form>
                </div>

                {/* <div>
                    {data.map(item => (
                        <div key={item.id} >
                            <div className="product">
                                <div className="product-image">
                                    <img src={item.url_picture} alt="Product Image" />
                                </div>
                                <div className="product-details">
                                    <h2 className="product-title">{item.name}</h2>
                                    <p className="product-description">{item.description}</p>
                                    <div className="product-price">{item.author}</div>
                                    <div className="product-price">{item.year}</div>
                                    <button className="product-button" ><a href={item.url_minio}>Скачать</a></button>
                                </div>
                            </div>
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
