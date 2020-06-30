import React, { useState } from 'react';
import './App.css';
import ProductsList from './ProductsList';
import Cart from './Cart';
import { ProductContext, ProductProvider } from './ProductContext';

function App() {
  return (
    <ProductProvider>
      <div>
        <ProductsList />
        {/* <Cart /> */}
      </div>
    </ProductProvider>
  );
}

export default App;
