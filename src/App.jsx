import "./App.css";
import Layout from "./layout/Layout";
import Inicio from "./components/Inicio/Inicio";
import {
  Routes,
  Route
} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductosBD from "./components/ProductosBD/ProductosBD";
//import ProductoDetalle from "./components/ProductoDetalle/ProductoDetalle";

function App() {
  return (
   <Routes>

  <Route element={<Layout />}>

    <Route
      path="/"
      element={<Inicio />}
    
    />

      <Route
      path="/products"
      element={<ProductosBD
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
