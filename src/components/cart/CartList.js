import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

const CartList = () => {
  const [cartItems, setCartItems] = useContext(CartContext);
  return (
    <div className="cart">
      <h1 className="cart-heading">Cart</h1>
      {cartItems.map(cartItem => (
        <CartItem
          key={cartItem.id}
          id={cartItem.id}
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
