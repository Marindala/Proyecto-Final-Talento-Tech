import styles from "./Header.module.css"
import { Link } from "react-router-dom";
function Header() {

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Tienda Yo Soy Yo</h2>

      <nav className={styles.nav}>
        <Link to="/">Inicio</Link>
        <Link to="/prod">Productos</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/cart">Carrito</Link>

      </nav>
    </header>
  )
}

export default Header;