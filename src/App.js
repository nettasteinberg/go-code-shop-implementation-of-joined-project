import './App.css';
import { Nav } from './components/Nav/Nav';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import {useState} from 'react'

function App() {
  const [categories, setCategories] = useState([]);
  const [filterByValue, setFilterByValue] = useState("None");
  const [sortByValue, setSortByValue] = useState("None");

  return (
    <div className="App">
     <Nav categories={categories} setFilterByValue={setFilterByValue} setSortByValue={setSortByValue}/>
     <ProductsSection setCategories={setCategories} filterByValue={filterByValue} sortByValue={sortByValue}/>
    </div>
  );
}

export default App;
