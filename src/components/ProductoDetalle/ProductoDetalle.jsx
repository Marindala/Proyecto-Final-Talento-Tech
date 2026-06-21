import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { useParams } from "react-router-dom";
import styles from "./ProductoDetalle.module.css";


function ProductoDetalle() {

  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {

    const productoRef = doc(db, "productos nacionales", id);

    getDoc(productoRef).then((resp) => {

      if (resp.exists()) {

        console.log(resp.data());

        setProducto({
          id: resp.id,
          nombre: resp.data().Nombre,
          precio: Number(resp.data().Precio),
          imagen: resp.data().Imagen,
          stock: resp.data().Stock,
          categoria: resp.data().Categoria,
        });

      } else {
        console.log("El producto no existe");
      }

    });

  }, [id]);

  if (!producto) {
    return <h2>Cargando producto...</h2>;
  }

  return (
    <div className={styles.container}>

      <div className={styles.detalleImagen}>

        <img
          src={`/${producto.imagen}`}
          alt={producto.nombre}
          width="300"
        />
      </div>

      <div className={styles.info}>

        <h1>{producto.nombre}</h1>

        <div className={styles.precio}>
          ${producto.precio}
        </div>

        <div className={styles.stock}>
          Stock disponible: {producto.stock}
        </div>

        <p className={styles.descripcion}>
          Prenda confeccionada con materiales de excelente calidad,
          diseñada para brindar comodidad y estilo en cualquier ocasión.
        </p>

        <button className={styles.boton}>
          Agregar al carrito
        </button>

      </div>

    </div>
  );
}

export default ProductoDetalle;