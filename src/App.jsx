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

function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<ProductosBD Mensaje={"Nuestros Productos"} />} />
        <Route path="/producto/:id" element={<ProductoDetalle Mensaje={"Productos"} />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/us" element={<Directorio />} />
        <Route path="/admin/cupones" element={<GestionCupones />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        

      </Route>

    </Routes>

  );
}

export default App;
