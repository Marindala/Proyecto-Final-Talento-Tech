import React from 'react';
import { useCart } from '../../context/CartContext'; // 1. Importamos el hook
import { Link } from 'react-router-dom';
import styles from "./Cart.module.css";

export const Cart = () => {
    // 2. Obtenemos el estado 'cart' y las funciones que necesitemos del
    //contexto
    const { cart, clearCart, getCartTotal } = useCart();
    console.log(cart);
    // Por ahora, este componente solo mostrará un mensaje.
    // Más adelante, consumirá los datos de nuestro contexto.

    // Si el carrito está vacío, mostramos un mensaje
    if (cart.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <h2>El carrito está vacío</h2>
                <p>Agrega productos para continuar la compra.</p>

                <Link
                    to="/products"
                    className={styles.catalogButton}
                >
                    Ver Catálogo
                </Link>
            </div>
        );
    }
    // Si hay productos, los mostramos


    return (
        <div className={styles.cartContainer}>
            <h1 className={styles.cartTitle}>
                Carrito de Compras
            </h1>

            {cart.map((item) => (
                <div
                    key={item.id}
                    className={styles.cartItem}
                >
                    <h4>{item.nombre}</h4>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio unitario: ${item.precio}</p>
                    <p>Subtotal: ${item.precio * item.quantity}</p>
                    
                </div>
            ))}
            <hr />
            <h3 className={styles.total}>
                Total a pagar: ${getCartTotal()}
            </h3>

            <div className={styles.buttons}>
                <button
                    className={styles.button}
                    onClick={clearCart}
                >
                    Vaciar Carrito
                </button>

                <Link
                    to="/products"
                    className={styles.button}
                >
                    Ver Catálogo
                </Link>

                <Link
                    to="/"
                    onClick={() => alert("Gracias por comprar")}
                    className={styles.button}
                >
                    Finalizar Compra
                </Link>
            </div>
        </div>
    );
}
    export default Cart;