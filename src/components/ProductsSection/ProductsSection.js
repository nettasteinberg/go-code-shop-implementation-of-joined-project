import './ProductsSection.css'
import React, {useContext} from "react"
import { Product } from "../Product/Product";
import { MyContext } from "../../MyContext";

export const ProductsSection = () => {
  const {products, filterByValue} = useContext(MyContext);

  return (
    <section className="products">
      {products.filter(filterByValue === "All Products" ? p => true : p => p.category === filterByValue).map((p) => <Product src={p.image} title={p.title} price={p.price}/>)}
    </section>
  );
};