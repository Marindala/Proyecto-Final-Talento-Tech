import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../Firebase/config.js';
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from "firebase/firestore";
import NewProductContainer from '../NewProductContainer/NewProductContainer';
import styles from "./Gestion.module.css"

const Gestion = () => {
    const [productoEditar, setProductoEditar] = useState(null);
    const [productos, setProductos] = useState([]);
    const formularioRef = useRef(null);
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
    const fetchProductos = async () => {
        const productosRef = collection(db, "productos nacionales");

        const resp = await getDocs(productosRef);

        setProductos(
            resp.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
        );
    };
    useEffect(() => {
        fetchProductos();
    }, []);


    const handleEditClick = (producto) => {
        setProductoEditar(producto);
        setMostrarModal(false);
        formularioRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
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
            <div ref={formularioRef}>
                <NewProductContainer
                    productoEditar={productoEditar}
                    setProductoEditar={setProductoEditar}
                     fetchProductos={fetchProductos}

                />
            </div>
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

                        <div className={styles.info}>

                            <h5>{prod.Nombre}</h5>

                            <p>
                                <strong>Categoría:</strong> {prod.Categoria}
                            </p>

                            <p className={styles.precio}>
                                ${prod.Precio}
                            </p>

                        </div>

                        <div className={styles.botones}>

                            <button
                                className={styles.btnEditar}
                                onClick={() => handleEditClick(prod)}
                            >
                                ✏️ Editar
                            </button>

                            <button
                                className={styles.btnEliminar}
                                onClick={() => handleDelete(prod.id)}
                            >
                                🗑 Eliminar
                            </button>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Gestion;