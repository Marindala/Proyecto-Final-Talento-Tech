import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../Firebase/config";
import styles from "./GestionCupones.module.css";

function GestionCupones() {
  const [codigo, setCodigo] = useState("");
  const [descuento, setDescuento] = useState("");
  const [cupones, setCupones] = useState([]);

  // Traer cupones en tiempo real
  useEffect(() => {
    const cuponesRef = collection(db, "cupones");

    const unsubscribe = onSnapshot(cuponesRef, (snapshot) => {
      const nuevosCupones = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCupones(nuevosCupones);
    });

    return () => unsubscribe();
  }, []);

  // Crear cupón
  const crearCupon = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "cupones"), {
        codigo,
        descuento: Number(descuento),
      });

      setCodigo("");
      setDescuento("");
    } catch (error) {
      console.error(error);
    }
  };

  // Eliminar cupón
  const eliminarCupon = async (id) => {
    try {
      await deleteDoc(doc(db, "cupones", id));
    } catch (error) {
      console.error(error);
    }
  };

 return (
  <div className={styles.container}>

    <h1 className={styles.titulo}>
      🎟 Administración de Cupones
    </h1>

    <form
      className={styles.formulario}
      onSubmit={crearCupon}
    >

      <input
        className={styles.input}
        type="text"
        placeholder="Remera, Buzo, etc..."
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        required
      />

      <input
        className={styles.input}
        type="number"
        placeholder="% de descuento"
        value={descuento}
        onChange={(e) => setDescuento(e.target.value)}
        required
      />

      <button
        className={styles.botonCrear}
        type="submit"
      >
        Crear Cupón
      </button>

    </form>

    <div className={styles.lista}>

      <h2>Cupones creados</h2>

      {cupones.map((cupon) => (

        <div
          key={cupon.id}
          className={styles.card}
        >

          <div>
            <div className={styles.codigo}>
              {cupon.codigo}
            </div>

            <div className={styles.descuento}>
              {cupon.descuento}% OFF
            </div>
          </div>

          <button
            className={styles.botonEliminar}
            onClick={() => eliminarCupon(cupon.id)}
          >
            🗑 Eliminar
          </button>

        </div>

      ))}

    </div>

  </div>
);
}

export default GestionCupones;