import React from "react";
import { sortArrOptions } from '../../dummy-data/data';
import { FilterOrSort } from '../FilterOrSort/FilterOrSort';
import './Nav.css';

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