import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import NewProductContainer from "../../components/NewProductContainer/NewProductContainer";
import styles from "./Inicio.module.css";

function Inicio() {
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
    <h1>YO SOY YO</h1>

    <p>
      Más que ropa.
      Una forma de expresar tu esencia.
    </p>

    <button>Descubrir Colección</button>
  </div>
</section>
    </main>
  );
}

export default Inicio;