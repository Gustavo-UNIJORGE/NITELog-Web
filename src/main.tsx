import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import './assets/styles/index.css'
import Home from './pages/Home/Home.tsx';
import Login from './pages/Login/Login.tsx';
import Register from './pages/Register/Register.tsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  </BrowserRouter>
)
