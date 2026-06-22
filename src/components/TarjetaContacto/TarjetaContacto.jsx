import styles from "./TarjetaContacto.module.css";

function TarjetaContacto({  nombre, rol, linkedinURL, fotoURL }) {
  return (
    <div className={styles.card}>
      <img className={styles.foto} src={fotoURL} alt={nombre}  />
      <h3 className={styles.nombre}>{nombre}</h3>
      <p className={styles.puesto}>{rol}</p>
       <a
        href={linkedinURL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkedin}
      >
        Ver perfil de LinkedIn
      </a>
    </div>
  );
}

export default TarjetaContacto;