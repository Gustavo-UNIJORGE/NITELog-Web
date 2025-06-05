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
import routes from './routes';
import DocsIndex from './modules/docs/Docs';
import DocsLayout from '@/docs/DocsLayout';
import QRCodeCreate from '@/qr-code/QRCodeCreate';
import QRCodeRead from '@/qr-code/QRCodeRead';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route>
        <Route element={<AuthLayout />}>
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='resetPassword' element={<ResetPassword />} />
        </Route>
        <Route element={<QRCodeLayout />} path={routes.QRCODE}>
          <Route index element={<QRCodeRead />} />
          <Route path={routes.QRCODE_GEN} element={<QRCodeCreate />} />
        </Route>
        <Route element={<DocsLayout/>} path={routes.DOCS}>
          <Route index element={<DocsIndex />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
