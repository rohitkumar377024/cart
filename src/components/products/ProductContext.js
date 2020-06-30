import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {
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
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
