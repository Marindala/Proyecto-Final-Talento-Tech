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

function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Inicio />}

        />
         <Route
          path="/us"
          element={<Directorio />}

        />

        <Route
          path="/products"
          element={<ProductosBD
            Mensaje={"Productos"} />}
        />
        <Route
          path="/producto/:id"
          element={<ProductoDetalle
            Mensaje={"Productos"} />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

      </Route>

    </Routes>

  );
}

export default App;
