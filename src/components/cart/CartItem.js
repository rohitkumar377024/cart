import React from 'react';

const CartItem = ({ name, price, id, totalCost, quantity }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>ID: {id}</p>
      <p>Total Cost: {totalCost}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default CartItem;
