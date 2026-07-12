import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import { createRoot } from 'react-dom/client'
import { AuthContext, AuthProvider } from './context/AuthContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* habilita el enrutamiento permite usar rutas//Rutas dinamicas */}
    <AuthProvider>
      <CartProvider> {/* Envolvemos la App */}
        <App />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>)