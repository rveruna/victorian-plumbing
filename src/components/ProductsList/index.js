import React from 'react';
import ProductCard from '../ProductCard';

const ProductsList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductsList;
