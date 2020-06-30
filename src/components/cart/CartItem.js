import React from 'react';

const CartItem = ({ name, price, id, totalCost, quantity }) => {
  return (
    <div className="cart-item">
      <p className="cart-item-title">
        {name} <strong>x{quantity}</strong>
      </p>
      {/* <p>Price: {price}</p> */}
      {/* <p>ID: {id}</p> */}
      <p className="cart-item-cost">₹{totalCost}</p>
      {/* <p>{quantity}</p> */}
    </div>
  );
};

export default CartItem;
