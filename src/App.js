import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/auth/Login';
import ProductList from './components/products/ProductList';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="py-10">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/" element={<Navigate to="/products" replace />} />
          </Routes>
        </main>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;