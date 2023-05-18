import { CardActions, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../MyContext';
import { Button } from '../Button/Button';
import "./Product.css";

export const Product = ({ src, title, price, id }) => {
  const { incrementProduct, decrementProduct, addToCart } = useContext(MyContext);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 200 }} className="product-card">
      <CardMedia
        component="img"
        alt={title}
        height="200"
        // width="240"
        image={src}
        gap="5"
        onClick={() => navigate(`product/${id}`)}
      />
      <CardContent height="200" className="product-info">
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}$
        </Typography>
      </CardContent>
      <CardActions className="addToCartContainer">
        <Button onClick={() => decrementProduct(setCount)} text={"-"} />
        <p>{count}</p>
        <Button onClick={() => incrementProduct(setCount)} text={"+"} />
      </CardActions>
      <CardActions>
        <Button onClick={() => addToCart(title, count, price, setCount)} text={"ADD TO CART"} />
      </CardActions>
    </Card>
  );
}

export default Product