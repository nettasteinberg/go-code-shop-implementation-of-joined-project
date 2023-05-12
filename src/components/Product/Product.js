import './Product.css'
import { Button } from '../Button/Button';
import { useContext, useState } from 'react';
import { MyContext } from '../../MyContext';

export const Product = ({src, title, price}) => {  
  
  const {incrementProduct, decrementProduct, addToCart} = useContext(MyContext);
  const [count, setCount] = useState(0);

  // useEffect()

  return (
    <div className="product-card">
      <div className="product-image">
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