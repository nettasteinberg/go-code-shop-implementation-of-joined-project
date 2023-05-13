import App from './App';
import { MyContext } from './MyContext';
import { Cart } from './components/Cart/Cart';
import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import About from './pages/About/About';
import Admin from './pages/Admin/Admin';
import styled from "styled-components";

export const Routing = () => {
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

  const StyledLink = styled(Link)`
    color: Blue;
    text-decoration: none;
    margin: 0.5rem;
    position: relative;
    `;

  return (
    <BrowserRouter>
      <MyContext.Provider value={{itemsInCart, setFilterByValue, setSortByValue, categories, incrementProduct, decrementProduct, addToCart, products, filterByValue, setItemsInCart}}>
        <StyledLink to="/">HomePage</StyledLink>
        <StyledLink to="about">About</StyledLink>
        <StyledLink to="cart">Cart</StyledLink>
        <StyledLink to="admin">Admin</StyledLink>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="product/:id" element={<SingleProductPage />}/>
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="admin" element={<Admin />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default Routing;