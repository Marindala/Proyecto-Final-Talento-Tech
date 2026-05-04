import "./App.css";
import Layout from "./layout/Layout";
import TarjetaProducto from "./components/TarjetaProducto/TarjetaProducto";
import image1 from "../public/image/image1.jpeg";
import image2 from "../public/image/image2.jpeg";
import image3 from "../public/image/image3.jpeg";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

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

          <div className="gridProductos">
            <TarjetaProducto
              imagen={image1}
              nombre="Buzo Buche Lanilla Argentina"
              precio="$35000"
            />

            <TarjetaProducto
              imagen={image2}
              nombre="Buzo Buche Lanilla Árbol"
              precio="$35000"
            />

            <TarjetaProducto
              imagen={image3}
              nombre="Buzo Buche de Lanilla Corazón"
              precio="$35000"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default App;
