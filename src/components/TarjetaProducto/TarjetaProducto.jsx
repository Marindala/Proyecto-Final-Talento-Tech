//import { ItemList } from "../ItemList/Itemlist";
import { useState } from 'react';
import styles from "./TarjetaProducto.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function TarjetaProducto({ id, nombre, precio, imagen, stock }) {
  const [cantidad, setCantidad] = useState(0);
  const [esFavorito, setesFavorito] = useState(false)
  const { addToCart } = useCart();

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
  /*  const agregarAlCarrito = () => {
     alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
   } */


  const agregarAlCarrito = () => {

    if (cantidad === 0) {
      alert("Seleccioná al menos una unidad");
      return;
    }

    addToCart(
      {
        id,
        nombre,
        precio,
        imagen
      },
      cantidad
    );

    alert(`Agregaste ${cantidad} unidades de ${nombre}`);
  }
  return (
    /*  <Link
       to={`/producto/${id}`}
       className={styles.card}
     > */
    <div className={styles.card}>
      <Link to={`/producto/${id}`} className={styles.detalle}> {/* detalle de tarjeta */}
        <img className={styles.imagen} src={imagen} alt={nombre} />
      </Link>

      <h2 className={styles.nombre}>{nombre}</h2>
      <p className={styles.precio}>
        ${precio.toLocaleString("es-AR")}
      </p>
      <p>Stock disponible: {stock}</p>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent:
          'center', margin: '10px 0'
      }}>
        <div className={styles.contador}>
          <button
            className={styles.contadorBtn}
            onClick={decrementar}
          >
            −
          </button>

          <span className={styles.cantidad}>
            {cantidad}
          </span>

          <button
            className={styles.contadorBtn}
            onClick={incrementar}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.izquierda}></div>
      <div className={styles.contentBoton}>
        <button className={styles.boton} onClick={agregarAlCarrito}>Agregar {cantidad} al carrito</button>
        <span onClick={marcarComoFavorito}
          className={styles.favorito}
        > {esFavorito ? '⭐' : '☆'}
        </span>
      </div>
    </div>
  );
}

export default TarjetaProducto;