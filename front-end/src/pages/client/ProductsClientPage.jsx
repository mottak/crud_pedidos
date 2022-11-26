import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/Products/ProductCard';
import api from '../../services/userApiService';

function ClientProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await api.getClientsProducts();

      console.log('allProducts.data', allProducts.data);
      setProducts(allProducts.data);
    };
    getProducts();
  }, []);
  return (
    <>
      <Header title="Mercadão" />
      {products.map((product, index) => (
        <ProductCard key={product.id} index={index} product={product} />
      ))}
    </>
  );
}

export default ClientProducts;
