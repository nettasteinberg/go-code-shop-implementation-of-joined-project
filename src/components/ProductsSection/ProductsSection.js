import React, { useContext } from "react";
import { MyContext } from "../../MyContext";
import { sortAlphabeticallyAToZ, sortAlphabeticallyZToA, sortByPriceHighToLow, sortByPriceLowToHigh, sortByRating } from '../../dummy-data/sortingAlgorithms';
import { Product } from "../Product/Product";
import './ProductsSection.css';

export const ProductsSection = () => {
  const {products, filterByValue, sortByValue, lowestPriceInRange, highestPriceInRange} = useContext(MyContext);
  const sortByValueFunc = (value) => {
    switch(value) {
      case "Alphabetically, A-Z":
        return sortAlphabeticallyAToZ;
      case "Alphabetically, Z-A":
        return sortAlphabeticallyZToA;
      case "Price, low to high":
        return sortByPriceLowToHigh;
      case "Price, high to low":
        return sortByPriceHighToLow;
      case "Rating":
        return sortByRating;
      default:
        return () => 1;
    }
  }

  console.log("current highest price in range", highestPriceInRange)

  return (
    <section className="products">
      {products
      .filter(filterByValue.toLowerCase() === "all products" ? p => true : p => p.category === filterByValue)
      .filter(p => p.price >= lowestPriceInRange && p.price <= highestPriceInRange)
      .sort(sortByValueFunc(sortByValue))
      .map((p) => <Product key={p.id} src={p.image} title={p.title} price={p.price} id ={p.id}/>)}
    </section>
  );
};