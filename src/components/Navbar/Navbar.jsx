import React from 'react';
import { useState } from "react";
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";

function Navbar({ menuOpen, setMenuOpen }) {
    const { getCartQuantity } = useCart();
    console.log("Cantidad en el carrito:", getCartQuantity);


    // Ejecutamos la función para obtener el número total
    const totalProductos = getCartQuantity();


    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""
            }`
        } onClick={() => setMenuOpen(false)}>

            <Link to="/">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/us">Nosotros</Link>
            {/*   <Link to="/contact">Contacto</Link> */}
            <Link to="/gestion">Gestión</Link>
            <Link to="/admin/cupones">
                Cupones
            </Link>
            <Link to="/cart"> 🛒 {totalProductos > 0 && <span>({totalProductos})</span>}
            </Link>

        </nav>
    );
}
export default Navbar;