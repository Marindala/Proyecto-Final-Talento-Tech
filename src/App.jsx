import "./App.css";
import Layout from "./layout/Layout";
import Inicio from "./components/Inicio/Inicio";
import {
  Routes,
  Route
} from "react-router-dom";
import Cart from "./components/Cart/Cart";
//import ProductoDetalle from "./components/ProductoDetalle/ProductoDetalle";

function App() {
  return (
  <Routes>

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Inicio />}
        />

      {/*   <Route
          path="/producto/:id"
          element={<ProductoDetalle />}
        /> */}

      </Route>
        <Route path="/carrito" element={<Cart />} />

    </Routes>

  );
}

export default App;
