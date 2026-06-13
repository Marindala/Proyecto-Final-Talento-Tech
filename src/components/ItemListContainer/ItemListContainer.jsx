import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
//import styles from "./ItemListContainer.module.css"
import styles from "./ItemListContainer.module.css";


export function ItemListContainer({ Mensaje }) {

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    fetch("/data/productos.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));

  }, []);

  return (
    <div>
      <h2 className={styles.subtitulo}>{Mensaje}</h2>
      <div className={styles.productos}>
        <ItemList productos={productos} />
      </div>
    </div>
  );
}

export default ItemListContainer;