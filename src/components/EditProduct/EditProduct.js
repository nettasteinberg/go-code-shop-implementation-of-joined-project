import React from 'react'
import "./EditProduct.css"
import { GET_OR_DELETE_OR_EDIT_PRODUCT_BY_ID } from '../../constants/api'

const EditProduct = ({ id, title, fetchProducts }) => {
    return (
        <div className="editDiv hide">
            <p className='pEdit'>You can edit any and all of the following fields for product</p>
            <p className='pEdit'>{title}</p>
            <div className="inputFields">
                <div className="inputDiv">
                    <label>Description:</label>
                    <input type="text" className='editDescription' placeholder='description' />
                </div>
                <div className="inputDiv">
                    <label>Price:</label>
                    <input type="number" className='editPrice' placeholder='price' />
                </div>
                <div className="inputDiv">
                    <label>Image URL:</label>
                    <input type="text" className='editImageUrl' placeholder='image url' />
                </div>
            </div>
            <div className='buttons'>
                <button onClick={async () => {
                    const data = {}
                    const inputDescription = document.querySelector('.editDescription');
                    const inputPrice = document.querySelector('.editPrice');
                    const inputImageUrl = document.querySelector('.editImageUrl');
                    if (inputDescription.value !== "") {
                        data["description"] = inputDescription.value;
                    }
                    if (inputPrice.value !== "") {
                        data["price"] = inputPrice.value;
                    }
                    if (inputImageUrl.value !== "") {
                        data["image"] = inputImageUrl.value;
                    }
                    console.log("data to edit: ", data);
                    if (Object.keys(data).length > 0) {
                        const response = await fetch(`${GET_OR_DELETE_OR_EDIT_PRODUCT_BY_ID}${id}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data), // body data type must match "Content-Type" header
                        });
                        const responseData = await response.json();
                        console.log("responseData: ", responseData);
                        fetchProducts();
                    }
                    // document.querySelector("body").classList.toggle("blurEffect");
                    document.querySelector(".editDiv").classList.add("hide");
                    inputDescription.value = "";
                    inputPrice.value = "";
                    inputImageUrl.value = "";
                }}>Apply changes</button>
                <button onClick={() => {
                    document.querySelector(".editDiv").classList.add("hide");
                    // document.querySelector("body").classList.toggle("blurEffect");
                }}>
                    Discard and close
                </button>
            </div>
        </div >
    )
}

export default EditProduct