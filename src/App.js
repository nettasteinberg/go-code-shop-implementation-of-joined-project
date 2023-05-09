import './App.css';
import { MyContext } from './MyContext';
import { Cart } from './components/Cart/Cart';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { Nav } from './components/Nav/Nav';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import {useState} from 'react'

function App() {
  const [categories, setCategories] = useState([]);
  const [filterByValue, setFilterByValue] = useState("None");
  const [sortByValue, setSortByValue] = useState("None");
  const [itemsInCart, setItemsInCart] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <MyContext.Provider value={{categories, setCategories, filterByValue, setFilterByValue, setSortByValue, itemsInCart, setItemsInCart, loading, setLoading}}>
      <div className="App">
        <Nav/>
        <LoadingSpinner/>
        <Cart/>
        <ProductsSection/>
      </div>
    </MyContext.Provider>
  );
}

export default App;