import './ProductsSection.css'
import React, {useContext} from "react"
import { Product } from "../Product/Product";
import { MyContext } from "../../MyContext";
import { sortAlphabeticallyAToZ, sortAlphabeticallyZToA, sortByPriceHighToLow, sortByPriceLowToHigh, sortByRating } from '../../dummy-data/sortingAlgorithms';

export const ProductsSection = () => {
  const {products, filterByValue, sortByValue} = useContext(MyContext);

  const sortByValueFunc = (value) => {
    switch(value) {
      case "Alphabetically, A-Z":
        return sortAlphabeticallyAToZ;
        break;
      case "Alphabetically, Z-A":
        return sortAlphabeticallyZToA;
        break;
      case "Price, low to high":
        return sortByPriceLowToHigh;
        break;
      case "Price, high to low":
        return sortByPriceHighToLow;
        break;
      case "Rating":
        return sortByRating;
        break;
      default:
        return () => 1;
    }
  }

  return (
    <section className="products">
      {products
      .filter(filterByValue.toLowerCase() === "all products" ? p => true : p => p.category === filterByValue)
      .sort(sortByValueFunc(sortByValue))
      .map((p) => <Product key={p.id} src={p.image} title={p.title} price={p.price} id ={p.id}/>)}
    </section>
  );
};