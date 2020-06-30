import React from 'react';
import './App.css';
import { ProductProvider } from './components/products/ProductContext';
import { CartProvider } from './components/cart/CartContext';
import ProductsList from './components/products/ProductsList';
import CartList from './components/cart/CartList';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div>
          <ProductsList />
          <CartList />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
