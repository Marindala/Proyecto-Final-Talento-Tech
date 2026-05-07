import "./App.css";
import Layout from "./layout/Layout";
import TarjetaProducto from "./components/TarjetaProducto/TarjetaProducto";
import image1 from "../public/image/image1.jpeg";
import image2 from "../public/image/image2.jpeg";
import image3 from "../public/image/image3.jpeg";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NewProductContainer from "./components/NewProductContainer/NewProductContainer";

function App() {
  return (
    <Layout>
      <main className="main">
        <section className="hero">
          <h1>Bienvenidos a Tienda Yo Soy Yo</h1>
          <p>Productos con estilo, energía y buena vibra 🌸✨</p>
        </section>

        <section className="catalogo">
          <h2>Nuestros Productos Destacados</h2>

          <ItemListContainer/>

         {/*  */}
        </section>
        <section>
           <NewProductContainer />
    
        </section>
      </main>
    </Layout>
  );
}

export default App;
