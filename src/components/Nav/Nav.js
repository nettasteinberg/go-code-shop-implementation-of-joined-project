import './Nav.css'
import { FilterOrSort } from '../FilterOrSort/FilterOrSort';
import { sortArrOptions } from '../../dummy-data/data';
export const Nav = ({categories, setFilterByValue, setSortByValue}) => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <FilterOrSort label={"Filter"} optionsArr={categories} setFilterByValue={setFilterByValue}/>
        <FilterOrSort label={"Sort"} optionsArr={sortArrOptions} setSortByValue={setSortByValue}/>
      </div>
    </nav>
  );
};