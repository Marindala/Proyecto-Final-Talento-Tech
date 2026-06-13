import React, { useState, useEffect } from 'react';
import styles from "./ProductosBD.module.css";
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto.jsx';
// Importaciones clave de Firebase
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config.js';

const ProductosBD = () => {
    // Estado para guardar los productos que traigamos de la DB
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const productosDB = collection(db, "productos nacionales")
        console.log(productos);
        getDocs(productosDB).then((resp) => {
             setProductos(
            resp.docs.map((doc) => ({
                id: doc.id,
                nombre: doc.data().Nombre,
                precio: Number(doc.data().Precio),
                imagen: doc.data().Imagen,
                stock: doc.data().Stock,
                categoria: doc.data().Categoria
            }))
        );
        })
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez
    return (
        <div>
            <h1 className={styles.subtitulo}>Productos</h1>
            <div className={styles.listaProductos}>
                {/* 5. Mapeamos el estado `productos` para renderizar cada
uno */}
                {productos.map(prod => {
                    console.log(prod);

                    return (
                        <div className={styles.productos} key={prod.id}>
                            <TarjetaProducto
                                key={prod.id}
                                id={prod.id}
                                nombre={prod.nombre}
                                precio={prod.precio}
                                imagen={prod.imagen}
                                stock={prod.stock}
                                categoria={prod.categoria}
                            />
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ProductosBD;