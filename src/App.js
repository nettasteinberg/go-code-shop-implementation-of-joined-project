import React from 'react';
import './App.css';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { Nav } from './components/Nav/Nav';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import RangeSlider from './components/RangeSlider/RangeSlider';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="rangeSlider">
        <RangeSlider />
      </div>
      <LoadingSpinner />
      <ProductsSection />
    </div>
  );
}

export default App;