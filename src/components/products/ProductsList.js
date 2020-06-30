import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import Product from './Product';

const ProductsList = () => {
  const [products, setProducts] = useContext(ProductContext);

  return (
    <div className="products">
      <h1 className="products-heading">Products</h1>
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsList;
