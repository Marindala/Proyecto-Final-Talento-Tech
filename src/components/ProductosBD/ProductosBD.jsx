import React, { useState, useEffect } from 'react';
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
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            );
        })
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez
    return (
        <div>
            <h1>Productos Nacionales</h1>
            <div className="lista-productos">
                {/* 5. Mapeamos el estado `productos` para renderizar cada
uno */}
                {productos.map(prod => {
                    console.log(prod);

                    return (
                        <div key={prod.id}>
                            <img
                                src={prod.Imagen}
                                alt={prod.Nombre}
                                style={{ width: '100px' }}
                            />
                            <h3>{prod.Nombre}</h3>
                            <p>Categoría: {prod.Categoria}</p>
                            <p>Precio: ${prod.Precio}</p>
                            <p>Stock: {prod.Stock} unidades</p>
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ProductosBD;