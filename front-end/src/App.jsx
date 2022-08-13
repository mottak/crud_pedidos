import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import ClientOrder from './pages/client/OrdersClientPage';
import SellerOrder from './pages/seller/SellerOrders';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ordersclient" element={<ClientOrder />} />
        <Route path="/ordersseller" element={<SellerOrder />} />
      </Routes>
    </div>
  );
}

export default App;
