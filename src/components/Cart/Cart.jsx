import React from 'react';
import { useCart } from '../../context/CartContext'; // 1. Importamos el hook
import { Link } from 'react-router-dom';

export const Cart = () => {
    // 2. Obtenemos el estado 'cart' y las funciones que necesitemos del
    //contexto
    const { cart, clearCart, getCartTotal } = useCart();
    // Por ahora, este componente solo mostrará un mensaje.
    // Más adelante, consumirá los datos de nuestro contexto.

    // Si el carrito está vacío, mostramos un mensaje
    if (cart.length === 0) {
        return (
            <div>
                <h1>El carrito está vacío</h1>
                <p>Agrega productos para continuar la compra.</p>
                <Link to="/productos" className="btn-volver">
                    Ver Productos
                </Link>
            </div>
        );
    }
    // Si hay productos, los mostramos
    return (

        <div>
            <h1>Carrito de Compras</h1>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <h4>{item.nombre}</h4>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio unitario: ${item.precio}</p>
                    <p>Subtotal: ${item.precio * item.quantity}</p>
                </div>
            ))}
            <hr />
            <h3>Total a pagar: ${getCartTotal()}</h3>
            <button className="btn-vaciar" onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/" onClick={() => alert("Gracias por comprar")}
className="btn - finalizar">
Finalizar Compra
</Link>
        </div >

    );
};
export default Cart;