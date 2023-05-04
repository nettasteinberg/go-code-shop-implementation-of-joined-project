import {useState, useEffect} from "react"
import './ProductsSection.css'
import { Product } from "../Product/Product";

export const ProductsSection = () => {
  // const [isVeteran, setIsVeteran] = useState(false)
  const [products, setProducts] = useState([])
  
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("data", data);
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  },[]) 

  return (
    <section className="products">
      {products.map((p) => <Product src={p.image} title={p.title} price={p.price}/>)}
    </section>
    );
  };
  