import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import NewProductContainer from "../../components/NewProductContainer/NewProductContainer";
import { useNavigate } from "react-router-dom";
import styles from "./Inicio.module.css";

function Inicio() {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>

      {/*  <section className={styles.hero}>
        <h1>Bienvenidos a Tienda Yo Soy Yo</h1>

        <p>
          Productos con estilo, energía y buena vibra 🌸✨
        </p>
      </section>

      <section className={styles.catalogo}>
        <h2>Nuestros Productos Destacados</h2>

        <ItemListContainer />
      </section>

      <section>
        <NewProductContainer />
      </section> */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <span className={styles.badge}>
            NUEVA COLECCIÓN
          </span>

          <h1>Vestir con conciencia</h1>

          <p>
            Prendas con intención,
            inspiradas en la autenticidad y la conexión interior.
          </p>

          <button onClick={() => navigate("/prod")}>Explorar Colección</button>
        </div>
      </section>
    </main>
  );
}

export default Inicio;