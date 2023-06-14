import React from 'react'
import "./AddProduct.css"
import { BASE_URL } from '../../constants/api';

const AddProduct = () => {
    return (
        <React.Fragment>
            <p className='p'>To add a new product, please fill the following fields and click add</p>
            <form className="addProductForm">
                <div className="inputDiv">
                    <label>Title:</label>
                    <input type="text" className='title' required defaultValue="New product" />
                </div>
                <div className="inputDiv">
                    <label>Description:</label>
                    <input type="text" className='description' defaultValue="Description" required />
                </div>
                <div className="inputDiv">
                    <label>Price:</label>
                    <input type="number" className='price' defaultValue={1000} required />
                </div>
                <div className="inputDiv">
                    <label>Category:</label>
                    <input type="text" className='category' defaultValue="men's clothing" required />
                </div>
                <div className="inputDiv">
                    <label>Image URL:</label>
                    <input type="text" className='imageUrl' defaultValue="https://m.media-amazon.com/images/I/71qtAiNUCpL.jpg" required />
                </div>

                <button type="submit" onClick={ async () => {
                    const data = {
                        title: document.querySelector('.title').value,
                        description: document.querySelector('.description').value,
                        price: document.querySelector('.price').value,
                        category: document.querySelector('.category').value,
                        image: document.querySelector('.imageUrl').value,
                    }
                    console.log("post data: ",data);
                    const response = await fetch(BASE_URL, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data), // body data type must match "Content-Type" header
                      });
                }}>Add</button>
            </form>

        </React.Fragment>
    )
}

export default AddProduct