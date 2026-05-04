//import { ItemList } from "../ItemList/Itemlist";
import { useState } from 'react';
import styles from "./TarjetaProducto.module.css";

function TarjetaProducto({ imagen, nombre, precio }) {
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
  return (
    <div className={styles.card}>
      <img className={styles.imagen} src={imagen} alt={nombre} />
      <h3 className={styles.nombre}>{nombre}</h3>
      <p className={styles.precio}>{precio}</p>
      <button className={styles.boton}  onClick={agregarAlCarrito}>Agregar al carrito</button>
      <span onClick={marcarComoFavorito}
                style={{ fontSize: '24px' }}
            > {esFavorito ? '⭐' : '☆'}
            </span>
    </div>
  );
}

export default TarjetaProducto;