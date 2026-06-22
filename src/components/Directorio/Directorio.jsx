import { useEffect, useState } from "react";
import TarjetaContacto from "../TarjetaContacto/TarjetaContacto"
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config.js';;
import styles from "./Directorio.module.css";

function Directorio() {
  const [nosotros, setNosotros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const equipo = collection(db, "equipo")
    console.log(nosotros);
    getDocs(equipo).then((resp) => {
      setNosotros(
        resp.docs.map((doc) => ({
          id: doc.id,
          nombre: doc.data().Nombre,
          imagen: doc.data().FotoURL,
          rol: doc.data().Rol,
          linkedinURL: doc.data().LinkedinURL
        }))
      );
    })
      .catch(() => {
        setError("No se pudo cargar el equipo");
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);
  // El array vacío asegura que este efecto se ejecute solo una vez
  /*  if (cargando) {
     return <p className={styles.mensaje}>Cargando equipo...</p>;
   }
 
   if (error) {
     return <p className={styles.error}>⚠️ {error}</p>;
   } */

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.titulo}>Nuestro Equipo</h2>

      <div className={styles.grid}>
        {nosotros.map((persona) => (
          <TarjetaContacto
            key={persona.id}
            fotoURL={persona.imagen}
            nombre={persona.nombre}
            rol={persona.rol}
            linkedinURL={persona.linkedinURL}

          />
        ))}
      </div>
    </div>
  );
}

export default Directorio;