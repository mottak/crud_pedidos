import React from 'react';

function ProductCard({ name, photo, price }) {
  return (
    <main>
      <img src={photo} alt="imagem do produto desse card" />
      <h6>{name}</h6>
      <h6>{price}</h6>
    </main>
  );
}

export default ProductCard;
