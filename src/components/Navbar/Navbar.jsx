import React from 'react';
import { useState } from "react";
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom';

function Navbar({ menuOpen, setMenuOpen }) {

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""
            }`
        }  onClick={() => setMenuOpen(false)}>

            <Link to="/">Inicio</Link>
            <Link to="/prod">Productos</Link>
            <Link to="/history">Sobre Yo Soy Yo</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/cart"> 🛒</Link>

        </nav>
    );
}
export default Navbar;