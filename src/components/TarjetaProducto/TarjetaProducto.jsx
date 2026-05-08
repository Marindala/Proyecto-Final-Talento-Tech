//import { ItemList } from "../ItemList/Itemlist";
import { useState } from 'react';
import styles from "./TarjetaProducto.module.css";
import { Link } from "react-router-dom";

function TarjetaProducto({ id, nombre, precio, imagen, stock }) {
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
    /*  <Link
       to={`/producto/${id}`}
       className={styles.card}
     > */
    <div className={styles.card}>
      <Link to={`/producto/${id}`} className={styles.detalle}>
        <img className={styles.imagen} src={imagen} alt={nombre} />
      </Link>

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
      <div className={styles.izquierda}></div>
      <div className={styles.contentBoton}>
        <button className={styles.boton} onClick={agregarAlCarrito}>Agregar al carrito</button>
        <span onClick={marcarComoFavorito}
          className={styles.favorito}
        > {esFavorito ? '⭐' : '☆'}
        </span>
      </div>
    </div>
  );
}

export default TarjetaProducto;