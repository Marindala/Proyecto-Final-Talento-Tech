import styles from "./TarjetaContacto.module.css";

function TarjetaContacto({ imagen, nombre, puesto, email, posicion }) {
  return (
    <div className={styles.card}>
      <img className={styles.foto} src={imagen} alt={nombre}  style={{ objectPosition: posicion || "center" }} />
      <h3 className={styles.nombre}>{nombre}</h3>
      <p className={styles.puesto}>{puesto}</p>
      <p className={styles.email}>{email}</p>
    </div>
  );
}

export default TarjetaContacto;