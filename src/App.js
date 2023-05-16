import React from 'react';
import './App.css';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { Nav } from './components/Nav/Nav';
import { ProductsSection } from './components/ProductsSection/ProductsSection';

function App() {
  return (
      <div className="App">
        <Nav/>
        <LoadingSpinner/>
        <ProductsSection/>
      </div>
  );
}

export default App;