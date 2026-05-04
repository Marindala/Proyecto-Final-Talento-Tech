import { useState } from 'react';
// Recibe las props usando destructuring
export function Item({ id, nombre, precio, stock }) {
    const [cantidad, setCantidad] = useState(0);
    const [esFavorito, setesFavorito] = useState(false)

    const marcarComoFavorito = () => {
        setesFavorito((prev) => !prev);

/*         si prev era false, devuelve true
           si prev era true, devuelve false */

    }

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1); //setear =cambiame el valor
        }
    };
    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
    const agregarAlCarrito = () => {
        alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
    }
    /*  const CompraClick = () => {// Quiero que se ejecute cuando le doy clic
    alert(`¡Agregaste ${nombre} al chango!`);
    }; */
    return (
        <div style={{
            margin: '20px', padding: '20px', border: '1px solid black'
        }}>
            <h3 >{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent:
                    'center', margin: '10px 0'
            }}>
                <button onClick={decrementar}>-</button>
                <p style={{ margin: '0 10px' }}>{cantidad}</p>
                <button onClick={incrementar}>+</button>
            </div>
            <button onClick={agregarAlCarrito}>Comprar</button>
            <span onClick={marcarComoFavorito}
                style={{ fontSize: '24px' }}
            > {esFavorito ? '⭐' : '☆'}
            </span>
        </div>
    );
}