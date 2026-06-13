import "./App.css";
import Layout from "./layout/Layout";
import Inicio from "./components/Inicio/Inicio";
import {
  Routes,
  Route
} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
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
      element={<ItemListContainer
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
