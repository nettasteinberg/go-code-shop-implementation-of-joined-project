import './App.css';
import { Cart } from './components/Cart/Cart';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { Nav } from './components/Nav/Nav';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import React from 'react';

function App() {
  return (
      <div className="App">
        <Nav/>
        <LoadingSpinner/>
        <Cart/>
        <ProductsSection/>
      </div>
  );
}

export default App;