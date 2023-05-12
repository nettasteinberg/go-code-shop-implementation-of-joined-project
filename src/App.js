import './App.css';
import { MyContext } from './MyContext';
import { Cart } from './components/Cart/Cart';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { Nav } from './components/Nav/Nav';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import {useState, useEffect} from 'react'

function App() {
  const [categories, setCategories] = useState([]);
  const [filterByValue, setFilterByValue] = useState("All Products");
  const [sortByValue, setSortByValue] = useState("All Products");
  const [itemsInCart, setItemsInCart] = useState({});
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setLoading(false);
    console.log("data", data);
    setProducts(data);
  }

  useEffect(() => {
    const categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
    console.log("Categories:", categories);
    setCategories(categories);
  }, [products])

  return (
    <MyContext.Provider value={{categories, setCategories, filterByValue, setFilterByValue, setSortByValue, itemsInCart, setItemsInCart, loading, setLoading, products}}>
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