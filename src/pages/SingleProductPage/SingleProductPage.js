import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./SingleProductPage.css";

export const SingleProductPage = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [currentId, setCurrentId] = useState(-1);

  useEffect(() => {
    fetchSingleProduct(params.id);
  }, [])

  const fetchSingleProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
    console.log(data.id, data.price);
    setSingleProduct(data);
    setCurrentId(data.id);
  }

  return (
    <div>
      {console.log(singleProduct)}
      <div className="product-card">
        <div className="product-image">
          <img src={singleProduct.image} alt={singleProduct.title}/>
        </div>
        <div className="product-info">
          <h5>{singleProduct.title}</h5>
          {singleProduct.id === currentId  && <h6>{singleProduct.price}$</h6>}
        </div>
      </div>
    </div>
  )
}

export default SingleProductPage