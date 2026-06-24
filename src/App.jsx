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
        

      </Route>

    </Routes>

  );
}

export default App;
