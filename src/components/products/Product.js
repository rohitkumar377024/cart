import React from 'react';

const Product = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default Product;
