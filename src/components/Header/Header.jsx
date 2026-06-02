import styles from "./Header.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png"

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img
          src={logo}
          alt="Yo Soy Yo"
          className={styles.logoImage}
        />

        <div className={styles.brandText}>
          <span className={styles.logoTitle}>
             Yo Soy Yo
          </span>

        {/*   <span className={styles.logoSubtitle}>
            Vestir con conciencia
          </span> */}
        </div>
      </Link>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""
        }`}>
        <Link to="/">Inicio</Link>
        <Link to="/prod">Productos</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/cart"> 🛒</Link>

      </nav>

      <button className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  )
}

export default Header;