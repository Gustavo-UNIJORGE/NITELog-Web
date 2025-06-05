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
import HomeLayout from './pages/HomeLayout';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      {/* Atribui Layout padrão com Navbar Main e Footer */}
      <Route element={<HomeLayout />}>
        {/* Pagina inicial */}
        <Route index element={<Home />} /> 
        {/* Login, Cadastro, Esqueci a Senha */}
        <Route element={<AuthLayout />}> 
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='resetPassword' element={<ResetPassword />}/>
        </Route>
        {/* Qr-Code */}
        <Route element={<QRCodeLayout />} path={routes.QRCODE}>
          <Route index />
        </Route>
        {/* Documentação */}
        <Route element={<DocsLayout/>} path={routes.DOCS}>
          <Route index element={<DocsIndex />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
