import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase/config.js';
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from "firebase/firestore";
import NewProductContainer from '../NewProductContainer/NewProductContainer';
import styles from "./Gestion.module.css"

const Gestion = () => {
    const [productoEditar, setProductoEditar] = useState(null);
    const [productos, setProductos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        precio: '',
        stock: '',
        categoria: '' // Quitamos la urlImagen de aca porque la obtendremos después de la subida
    });
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
    }, []);

    /*  useEffect(() => {
         if (productoAEditar) {
             setDatosForm(productoAEditar);
         } else {
             setDatosForm(estadoInicialForm);
         }
     }, [productoAEditar]); */

    const handleEditClick = (producto) => {
        setProductoEditar(producto);
        setMostrarModal(false);
    };

    const cancelarEdicion = () => {
        setProductoEditar(null);
        setMostrarModal(false);
    };
    /*     const cancelarEdicion = () => {
        setProductoEditar(null);
    };
     */
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
        <div className={styles.container}>

            <h2 className={styles.title}>Gestión de Productos</h2>
            <hr />
            <NewProductContainer
                productoEditar={productoEditar}
                setProductoEditar={setProductoEditar}

            />
            {productoEditar && (
                <div className={styles.contenedorCancelar}>
                    <button
                        className={styles.btnCancelar}
                        onClick={() => setMostrarModal(true)}
                    >
                        Cancelar Edición
                    </button>
                </div>
            )}
            {mostrarModal && (
                <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">
                                    Cancelar edición
                                </h5>
                            </div>

                            <div className="modal-body">
                                ¿Seguro que querés cancelar la edición?
                            </div>

                            <div className="modal-footer">

                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setMostrarModal(false)}
                                >
                                    No, seguir editando
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={cancelarEdicion}
                                >
                                    Sí, cancelar
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            )}
            <hr />
            <h3>Lista de Productos</h3>
            <ul className={styles.lista}>
                {productos.map((prod) => (
                    <li key={prod.id} className={styles.item}>
                        <span className={styles.nombre}>
                            {prod.Nombre}
                        </span>
                        {" - "}
                        <span className={styles.precio}>
                            ${prod.Precio}
                        </span>
                        <span>
                            {" "} | {prod.Categoria}
                        </span>
                        <button className={styles.btnEliminar} onClick={() => handleDelete(prod.id)} style={{
                            marginLeft:
                                '10px'
                        }}>Eliminar</button>
                        <button className={styles.btnEliminar} onClick={() => handleEditClick(prod)} style={{
                            marginLeft:
                                '10px'
                        }}>Editar</button>
                        {/*acá agregaremos los botones de acción */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Gestion;