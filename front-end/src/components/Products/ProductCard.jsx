import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const formatedPrice = product.price.replace('.', ',');
  return (
    <main>
      <img
        className="product-img"
        src={product.photo}
        alt={`imagem do produto ${product.name}`}
      />
      <h6>{product.name}</h6>
      <h6>R$ {formatedPrice}</h6>
    </main>
  );
}

export default ProductCard;
