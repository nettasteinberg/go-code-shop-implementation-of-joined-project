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

  useEffect(() => {
    const loadingSpinner = document.querySelector(".loader-container");
    loading ? loadingSpinner.style.display = "flex" : loadingSpinner.style.display = "none";
  }, [loading])

  const incrementProduct = (setFunc) => {
    setFunc((prev) =>  prev + 1);
  };
  
  const decrementProduct = (setFunc) => {
    setFunc((prev) => (prev === 0 ? prev : prev - 1));
  };

  const addToCart = (productName, amount, price, setFunc) => {
    if (amount === 0) {
      return;
    }
    if (productName in itemsInCart) {
      itemsInCart[productName][0] += amount;
    } else {
      itemsInCart[productName] = [amount, price];
    }
    setItemsInCart({...itemsInCart});
    setFunc(0);
  }

  return (
    <MyContext.Provider value={{itemsInCart, setItemsInCart, setFilterByValue, setSortByValue, categories, incrementProduct, decrementProduct, addToCart, products, filterByValue}}>
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