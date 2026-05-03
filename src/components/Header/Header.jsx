 import styles from "./Header.module.css"
 function Header() {
    
 return(
 <header className={styles.header}>
        <h2 className={styles.logo}>Tienda Yo Soy Yo</h2>

        <nav className={styles.nav}>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
          <a href="#">Carrito</a>
        </nav>
      </header>
 )
}

export default Header;