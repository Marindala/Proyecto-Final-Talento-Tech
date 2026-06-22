import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase/config.js';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import NewProductContainer from '../NewProductContainer/NewProductContainer';

const Gestion = () => {
    const [productos, setProductos] = useState([]);
    const estadoInicialForm = {
        nombre: "",
        categoria: "",
        precio: 0,
        stock: 0,
        imagen: ""
    };
    useEffect(() => {
        const fetchProductos = async () => {
            const productosRef = collection(db, "productos nacionales"); //
            //Ajustar "productos" al nombre de tu colección
            const resp = await getDocs(productosRef);
            setProductos(
                resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        fetchProductos();
    }, [productos]);

    const handleDelete = async (id) => {
        const confirmacion = window.confirm("¿Está seguro de que desea eliminar este producto ? ")
        if (confirmacion) {
            const docRef = doc(db, "productos nacionales", id);
            await deleteDoc(docRef);
            setProductos(productos.filter(prod => prod.id !== id));
            alert("Producto eliminado.");
        }
    };

    return (
        <div>

            <h2>Gestión de Productos</h2>
            <hr />
            <NewProductContainer datosForm={estadoInicialForm} />
            <hr />
            <h3>Lista de Productos</h3>
            <ul>
                {productos.map((prod) => (
                    <li key={prod.id}>
                        {prod.nombre} - ${prod.precio}
                        <button onClick={() => handleDelete(prod.id)} style={{
                            marginLeft:
                                '10px'
                        }}>Eliminar</button>
                        {/*acá agregaremos los botones de acción */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Gestion;