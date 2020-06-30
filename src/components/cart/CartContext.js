import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
  const [cartItems, setCartItems] = useState([
    {
      name: 'Samsung Galaxy Buds+',
      price: 15000,
      id: 1,
      totalCost: 30000,
      quantity: 2
    },
    {
      name: 'Oneplus 8 Pro',
      price: 60000,
      id: 2,
      totalCost: 240000,
      quantity: 4
    },
    {
      name: 'Boat Bassheads 100',
      price: 400,
      id: 3,
      totalCost: 2800,
      quantity: 7
    }
  ]);

  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      {props.children}
    </CartContext.Provider>
  );
};
