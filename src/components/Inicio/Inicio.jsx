import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import NewProductContainer from "../../components/NewProductContainer/NewProductContainer";
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Inicio.module.css";

function Inicio() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);
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


          {/*   <h1>Vestir con conciencia</h1> */}

          {/*    <p>
            Prendas con intención,
            inspiradas en la autenticidad y la conexión interior.
          </p> */}
          {showButton && (
            <button className={styles.floatingButton} onClick={() => navigate("/products")}>Explorar Colección</button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Inicio;