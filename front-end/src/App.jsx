import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import ClientProducts from './pages/client/ProductsClientPage';
import SellerOrder from './pages/seller/SellerOrders';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productsclient" element={<ClientProducts />} />
        <Route path="/ordersseller" element={<SellerOrder />} />
      </Routes>
    </div>
  );
}

export default App;
