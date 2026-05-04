import { useEffect, useState } from "react";
import TarjetaContacto from "../TarjetaContacto/TarjetaContacto";
import styles from "./Directorio.module.css";

function Directorio() {
  const [nosotros, setNosotros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los datos");
        }
        return res.json();
      })
      .then((data) => {
        setNosotros(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className={styles.mensaje}>Cargando equipo...</p>;
  }

  if (error) {
    return <p className={styles.error}>⚠️ {error}</p>;
  }

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.titulo}>Nuestro Equipo</h2>

      <div className={styles.grid}>
        {nosotros.map((persona) => (
          <TarjetaContacto
            key={persona.id}
            imagen={persona.imagen}
            nombre={persona.nombre}
            puesto={persona.puesto}
            email={persona.email}
            posicion={persona.posicion}
          />
        ))}
      </div>
    </div>
  );
}

export default Directorio;