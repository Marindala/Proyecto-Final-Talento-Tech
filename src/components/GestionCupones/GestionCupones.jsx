import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../Firebase/config";

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
    <div>
      <h1>Administración de Cupones</h1>

      <form onSubmit={crearCupon}>
        <input
          type="text"
          placeholder="Código"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="% descuento"
          value={descuento}
          onChange={(e) => setDescuento(e.target.value)}
          required
        />

        <button type="submit">
          Crear Cupón
        </button>
      </form>

      <hr />

      <h2>Cupones creados</h2>

      {cupones.map((cupon) => (
        <div key={cupon.id}>
          <strong>{cupon.codigo}</strong> - {cupon.descuento}% OFF

          <button
            onClick={() => eliminarCupon(cupon.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default GestionCupones;