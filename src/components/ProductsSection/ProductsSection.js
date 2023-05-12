import './ProductsSection.css'
import {useContext} from "react"
import { Product } from "../Product/Product";
import { MyContext } from "../../MyContext";

export const ProductsSection = () => {
  const {products, filterByValue} = useContext(MyContext);

  return (
    <section className="products">
      {console.log("Filter value: ", filterByValue)};
      {products.filter(filterByValue === "All Products" ? p => true : p => p.category === filterByValue).map((p) => <Product src={p.image} title={p.title} price={p.price}/>)}
    </section>
  );
};