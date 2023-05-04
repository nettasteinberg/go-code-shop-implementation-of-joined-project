import './Product.css'

export const Product = ({src, title, price}) => {
    return (
      <div className="product-card">
        <div className="product-image">
          <img src={src} alt="Winter Jacket"/>
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}</h6>
        </div>
      </div>
    );
  };
  