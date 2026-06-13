import React from 'react';
import { useState } from "react";
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""
            }`
        }>

            <Link to="/">Inicio</Link>
            <Link to="/history">Sobre Yo Soy Yo</Link>
            <Link to="/prod">Productos</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/cart"> 🛒</Link>

        </nav>
    );
}
export default Navbar;