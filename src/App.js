import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    {
      name: 'Samsung Galaxy Buds+',
      price: 15000,
      id: 1
    },
    {
      name: 'Oneplus 8 Pro',
      price: 60000,
      id: 2
    },
    {
      name: 'Boat Bassheads 100',
      price: 400,
      id: 3
    }
  ]);

  return (
    <div className="App">
      <h1>Cart.</h1>

      <h3>Products</h3>
      {products.map(product => (
        <li>{product.name}</li>
      ))}
    </div>
  );
}

export default App;
