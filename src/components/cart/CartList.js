import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

const CartList = () => {
  const [cartItems, setCartItems] = useContext(CartContext);
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map(cartItem => (
        <CartItem
          key={cartItem.id}
          name={cartItem.name}
          price={cartItem.price}
          totalCost={cartItem.totalCost}
          quantity={cartItem.quantity}
        />
      ))}
    </div>
  );
};

export default CartList;
