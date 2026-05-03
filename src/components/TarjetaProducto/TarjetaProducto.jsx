import styles from "./TarjetaProducto.module.css";

function TarjetaProducto({ imagen, nombre, precio }) {
  return (
    <div className={styles.card}>
      <img className={styles.imagen} src={imagen} alt={nombre} />
      <h3 className={styles.nombre}>{nombre}</h3>
      <p className={styles.precio}>{precio}</p>
      <button className={styles.boton}>Agregar al carrito</button>
    </div>
  );
}

export default TarjetaProducto;