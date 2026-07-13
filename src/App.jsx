import "./App.css";
import Layout from "./layout/Layout";
import Inicio from "./components/Inicio/Inicio";
import {
  Routes,
  Route
} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ProductosBD from "./components/ProductosBD/ProductosBD";
import ProductoDetalle from "./components/ProductoDetalle/ProductoDetalle";
import Directorio from "./components/Directorio/Directorio";
import Gestion from "./components/Gestion/Gestion";
import GestionCupones from "./components/GestionCupones/GestionCupones";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Inicio />} />
          <Route path="/products" element={<ProductosBD Mensaje={"Nuestros Productos"} />} />
          <Route path="/producto/:id" element={<ProductoDetalle Mensaje={"Productos"} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/us" element={<Directorio />} />
          {/* <Route path="/cupones" element={<GestionCupones />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/gestion"
            element={
              <ProtectedRoute rolesPermitidos={['admin']}>
                <Gestion />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cupones"
            element={
              <ProtectedRoute rolesPermitidos={['admin', 'user']}>
                <GestionCupones />
              </ProtectedRoute>
            }
          />


        </Route>

      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </>

  );
}

export default App;
