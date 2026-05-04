//import { ItemList } from "../ItemList/Itemlist";
import { useState } from 'react';
import styles from "./TarjetaProducto.module.css";

function TarjetaProducto({ imagen, nombre, precio, stock }) {
  const [cantidad, setCantidad] = useState(0);
  const [esFavorito, setesFavorito] = useState(false)

  const marcarComoFavorito = () => {
    setesFavorito((prev) => !prev);

    /*         si prev era false, devuelve true
               si prev era true, devuelve false */

  }
const incrementar = () => {
  setCantidad(prev => (prev < stock ? prev + 1 : prev));
};

const decrementar = () => {
  setCantidad(prev => (prev > 0 ? prev - 1 : prev));
};
  const agregarAlCarrito = () => {
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
  }
  return (
    <div className={styles.card}>
      <img className={styles.imagen} src={imagen} alt={nombre} />
      <h3 className={styles.nombre}>{nombre}</h3>
      <p className={styles.precio}>{precio}</p>
      <p>Stock disponible: {stock}</p>
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent:
                    'center', margin: '10px 0'
            }}>
                <button onClick={decrementar}>-</button>
                <p style={{ margin: '0 10px' }}>{cantidad}</p>
                <button onClick={incrementar}>+</button>
            </div>
            <div className={styles.contentBoton}>
      <button className={styles.boton}  onClick={agregarAlCarrito}>Agregar al carrito</button>
      <span onClick={marcarComoFavorito}
                style={{ fontSize: '26px', margin:"10px",position: "absolute" }}
            > {esFavorito ? '⭐' : '☆'}
            </span>
          </div>
    </div>
  );
}

export default TarjetaProducto;