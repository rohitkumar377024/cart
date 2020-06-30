import React from 'react';

const CartItem = ({ name, price, id, totalCost, quantity }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{id}</p>
      <p>{totalCost}</p>
      <p>{quantity}</p>
    </div>
  );
};

export default CartItem;
