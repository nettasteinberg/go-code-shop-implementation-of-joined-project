import './App.css';
import { MyContext } from './MyContext';
import { Cart } from './components/Cart/Cart';
import { Nav } from './components/Nav/Nav';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import {useState} from 'react'

function App() {
  const [categories, setCategories] = useState([]);
  const [filterByValue, setFilterByValue] = useState("None");
  const [sortByValue, setSortByValue] = useState("None");
  const [itemsInCart, setItemsInCart] = useState({});

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
    <MyContext.Provider value={{categories, setCategories, filterByValue, setFilterByValue, setSortByValue, itemsInCart, setItemsInCart, incrementProduct, decrementProduct, addToCart}}>
      <div className="App">
        <Nav/>
        <Cart/>
        <ProductsSection/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
