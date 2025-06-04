import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import './assets/styles/index.css'
import Home from './pages/Home.tsx';
import Login from './modules/auth/Login.tsx';
import Register from './modules/auth/Register';
import AuthLayout from './modules/auth/AuthLayout.tsx';
import ResetPassword from './modules/auth/ResetPassword.tsx';
import QrCodeIndex from './modules/qr-code/Index.tsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route>
        <Route element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='resetPassword' element={<ResetPassword />}/>
        </Route>
        <Route path='qr-code'>
          <Route index element={<QrCodeIndex />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
