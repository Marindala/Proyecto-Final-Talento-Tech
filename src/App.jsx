import "./App.css";
import Layout from "./layout/Layout";
import Inicio from "./components/Inicio/Inicio";
import {
  Routes,
  Route
} from "react-router-dom";
import ProductoDetalle from "./components/ProductoDetalle/ProductoDetalle";

function App() {
  return (
  <Routes>

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Inicio />}
        />

        <Route
          path="/producto/:id"
          element={<ProductoDetalle />}
        />

      </Route>

    </Routes>

  );
}

export default App;
