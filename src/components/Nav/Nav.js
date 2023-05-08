import './Nav.css'
import { FilterOrSort } from '../FilterOrSort/FilterOrSort';
import { sortArrOptions } from '../../dummy-data/data';
export const Nav = () => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <FilterOrSort label={"Filter"}/>
        <FilterOrSort label={"Sort"} optionsArr={sortArrOptions}/>
      </div>
    </nav>
  );
};