import './Nav.css';
import { FilterOrSort } from '../FilterOrSort/FilterOrSort';
import { sortArrOptions } from '../../dummy-data/data';
import React from "react";

export const Nav = () => {
  return (
    <nav className="product-filter">
      <h1>Top Shop</h1>
      <div className="sort">
        <FilterOrSort label={"Filter"}/>
        <FilterOrSort label={"Sort"} optionsArr={sortArrOptions}/>
      </div>
    </nav>
  );
};