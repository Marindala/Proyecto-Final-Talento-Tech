import React from 'react';
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



    return (

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} onClick={() => setMenuOpen(false)}>

            <Link to="/">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/us">Nosotros</Link>

            {user && <Link to="/cupones">Cupones</Link>}

            {user?.rol === "admin" && (
                <Link to="/gestion">Gestión</Link>
            )}

            <Link to="/cart">
                🛒 {totalProductos > 0 && <span>({totalProductos})</span>}
            </Link>

            {user ? (
                <>
                    <span className={styles.user}>
                        ¡Hola {user.rol === "admin" ? "Admin" : user.email}!
                    </span>

                    <button
                        className={styles.logout}
                        onClick={handleLogout}
                    >
                        Cerrar sesión
                    </button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}

        </nav>
    );
}
export default Navbar;