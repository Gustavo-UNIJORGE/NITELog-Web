import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
// import '@styles/index.css'
import '@styles/index.css'
import Home from '@pages/Home.tsx';
import Login from '@/auth/Login.tsx';
import Register from '@/auth/Register';
import AuthLayout from '@/auth/AuthLayout.tsx';
import ResetPassword from '@/auth/ResetPassword.tsx';
import QRCodeLayout from '@/qr-code/QRCodeLayout.tsx';

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
        <Route element path='qr-code'>
          <Route index element={<QRCodeLayout />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
