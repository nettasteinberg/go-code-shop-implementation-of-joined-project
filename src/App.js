import './App.css';
import { MyContext } from './MyContext';
import { Nav } from './components/Nav/Nav';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import {useState} from 'react'

function App() {
  const [categories, setCategories] = useState([]);
  const [filterByValue, setFilterByValue] = useState("None");
  const [sortByValue, setSortByValue] = useState("None");

  return (
    <MyContext.Provider value={{categories, setCategories, filterByValue, setFilterByValue, setSortByValue}}>
      <div className="App">
        <Nav/>
        <ProductsSection/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
