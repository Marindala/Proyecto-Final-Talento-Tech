import React from 'react';
import { useState } from "react";
import styles from "./Navbar.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";


function Navbar({ menuOpen, setMenuOpen }) {
    const { getCartQuantity } = useCart();
    console.log("Cantidad en el carrito:", getCartQuantity);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // Ejecutamos la función para obtener el número total
    const totalProductos = getCartQuantity();

    const handleLogout = async () => {
        await logout();
        navigate('/'); // Redirige automáticamente al inicio tras cerrar sesión
    };


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
            <ul>{/* Lógica de renderizado condicional */}
                {user ? (
                    <>{/* Mostrar Gestion SOLO si el usuario es admin */}
                        {user.rol === 'admin' && (
                            <li><Link to="/alta" style={{ color: 'black' }}>Gestion</Link></li>)}
                        <span>¡Hola, {user.email}!</span>
                        <button onClick={handleLogout }>Cerrar Sesión</button>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>

        </nav>
    );
}
export default Navbar;