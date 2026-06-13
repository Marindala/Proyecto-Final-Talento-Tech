import styles from "./Header.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../../public/image/Brand/logo2.png"
import Navbar from "../Navbar/Navbar";

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
             Vestir con Conciencia
          </span>

        {/*   <span className={styles.logoSubtitle}>
            Vestir con conciencia
          </span> */}
        </div>
      </Link>
      <Navbar menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
     

      <button className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  )
}

export default Header;