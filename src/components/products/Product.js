import React, { useContext } from 'react';
import { CartContext } from '../cart/CartContext';

const Product = ({ name, price, id }) => {
  const [cartItems, setCartItems] = useContext(CartContext);

  const addToCart = () => {
    setCartItems(prevCartItems => {
      //Getting Product IDs of previous cart items
      const productIdsInCart = prevCartItems.map(item => item.id);

      //If it already contains the clicked Product ID's add button
      if (productIdsInCart.includes(id)) {
        //Exists Already - Update Quantity and Total Cost
        const updateCartItems = prevCartItems.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalCost: item.totalCost + item.price
            };
          } else {
            return item;
          }
        });
        return updateCartItems;
      } else {
        //New Item - Add It to Cart
        //Total Cost will be the price itself initially and the quantity will be 1.
        //E.g. If 1 new product of ₹150 is added to the cart, the total cost will be ₹150 itself.
        return [
          ...prevCartItems,
          { name, price, id, totalCost: price, quantity: 1 }
        ];
      }
    });
  };

  return (
    <div className="product">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">₹{price}</p>
      <button className="add-to-cart-btn" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
