import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const Product = () => {
  const [products, setProducts] = useContext(ProductContext);

  return (
    <div>
      <h1>Products.</h1>

      {products.map(product => (
        <li>{product.name}</li>
      ))}
    </div>
  );
};

export default Product;
