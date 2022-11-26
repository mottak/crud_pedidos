import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/Products/ProductCard';
import api from '../../services/userApiService';
import './ProductClientPage.css';

function ClientProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await api.getClientsProducts();
      setProducts(allProducts.data);
    };
    getProducts();
  }, []);
  return (
    <div className="product-client-container">
      <Header title="Mercadão" />
      {products.map((product, index) => (
        <ProductCard key={product.id} index={index} product={product} />
      ))}
    </div>
  );
}

export default ClientProducts;
