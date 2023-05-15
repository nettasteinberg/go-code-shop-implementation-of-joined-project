import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import App from './App';
import { MyContext } from './MyContext';
import { Cart } from './components/Cart/Cart';
import About from './pages/About/About';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound/NotFound';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';

export const Routing = () => {
  const [categories, setCategories] = useState([]);
  const [filterByValue, setFilterByValue] = useState("All products");
  const [sortByValue, setSortByValue] = useState("Default");
  const [itemsInCart, setItemsInCart] = useState({});
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const sortOptions = ["Alphabetically, A-Z", "Alphabetically, Z-A", "Price, low to high", "Price, high to low", "Rating"];

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
    setCategories(categories);
    console.log("categories: ", categories);
  }, [products]);

  useEffect(() => {
    const loadingSpinner = document.querySelector(".loader-container");
    if (loadingSpinner) {
      loading ? loadingSpinner.style.display = "flex" : loadingSpinner.style.display = "none";
    };
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

  const NavUnlisted = styled.ul`

    display: flex;

    a {
      text-decoration: none;
    }

    li {
      color: #dc2f2f;
      margin: 0 0.8rem;
      font-size: 1.3rem;
      position: relative;
      list-style: none;
    }

    .active {
      li {
        border-bottom: 2px solid black;
      }
    }
  `; // Taken from https://dev.to/ridhikgovind/how-to-style-your-react-router-links-using-styled-components-2350

  return (
    <BrowserRouter>
      <MyContext.Provider value={{itemsInCart, setFilterByValue, setSortByValue, categories, incrementProduct, decrementProduct, addToCart, products, filterByValue, sortByValue, setItemsInCart, sortOptions}}>
        <NavUnlisted>
          <NavLink to="/" activeClassName="current" exact><li>HomePage</li></NavLink>
          <NavLink to="about" activeClassName="current" exact><li>About</li></NavLink>
          <NavLink to="cart" activeClassName="current" exact><li>Cart</li></NavLink>
          <NavLink to="admin" activeClassName="current" exact><li>Admin</li></NavLink>
        </NavUnlisted>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="product/:id" element={<SingleProductPage />}/>
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="admin" element={<Admin />} />
            {/* <Route path="*" element={<Navigate to="/" replace />} />   */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default Routing;