import {useState, useEffect} from "react"
import './ProductsSection.css'
import { Product } from "../Product/Product";

export const ProductsSection = ({setCategories, filterByValue}) => {
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
  
  useEffect(() => {
    const categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
    console.log("Categories:", categories);
    setCategories(categories);
  }, [products, setCategories])

  return (
    <section className="products">
      {products.filter(filterByValue === "None" ? p => true : p => p.category === filterByValue).map((p) => <Product src={p.image} title={p.title} price={p.price}/>)}
    </section>
  );
};