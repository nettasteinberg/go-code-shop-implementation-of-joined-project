import './Product.css'
import { Button } from '../Button/Button';
import React, { useContext, useState } from 'react';
import { MyContext } from '../../MyContext';
import { useNavigate } from "react-router-dom";

export const Product = ({src, title, price, id}) => { 
  const navigate = useNavigate();
  const {incrementProduct, decrementProduct, addToCart} = useContext(MyContext);
  const [count, setCount] = useState(0);

  return (
    <div className="product-card">
      <div className="product-image" onClick={() => navigate(`product/${id}`)}>
        <img src={src} alt={title}/>
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
      </div>
      <div className="addToCartContainer">
          <Button onClick={() => decrementProduct(setCount)} text={"-"} />
          <p>{count}</p>
          <Button onClick={() => incrementProduct(setCount)} text={"+"} />
      </div>
      <Button onClick={() => addToCart(title, count, price, setCount)} text={"ADD TO CART"} />
    </div>
  );
};