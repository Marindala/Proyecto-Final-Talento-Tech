//import { ItemList } from "../ItemList/Itemlist";
import { useState } from 'react';
import styles from "./TarjetaProducto.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "bootstrap-icons/font/bootstrap-icons.css";

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


      <div className={styles.imagenContainer}>

        <Link to={`/producto/${id}`} className={styles.detalle}>

          <img
            className={styles.imagen}
            src={imagen}
            alt={nombre}
          />

          <div className={styles.mensaje}>
            ✨ Click para más detalles ✨
          </div>

        </Link>


        <button
          onClick={marcarComoFavorito}
          className={styles.favorito}
          aria-label="Agregar a favoritos"
        >
          <i className={`bi ${esFavorito ? "bi-heart-fill" : "bi-heart"}`}></i>
        </button>

        <h2 className={styles.nombre}>{nombre}</h2> 
        <p className={styles.precio}> ${precio.toLocaleString("es-AR")} </p>


      </div>
    </div>
  );
}

export default TarjetaProducto;