import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="expenses" element={<Login />} />
        <Route path="invoices" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
