import './Product.css'
import { AddSubtractProduct } from '../AddSubtractProduct/AddSubtractProduct';

export const Product = ({src, title, price}) => {  
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={src} alt={title}/>
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
      </div>
      <AddSubtractProduct title={title} price={price}/>
    </div>
  );
};

