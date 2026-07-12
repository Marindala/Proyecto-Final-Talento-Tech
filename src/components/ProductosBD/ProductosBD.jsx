import React, { useState, useEffect, useMemo } from 'react';
import styles from "./ProductosBD.module.css";
import { FaSearch } from "react-icons/fa";
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto.jsx';
import { Container, Row, Col, Card, Button, InputGroup, Form } from 'react-bootstrap';
// Importaciones clave de Firebase
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config.js';

const ProductosBD = () => {
    // Estado para guardar los productos que traigamos de la DB
    const [productos, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // 2. Filtramos la lista de productos ANTES de renderizarla

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

    // Filtrado optimizado
    const productosFiltrados = useMemo(() => {

        return productos.filter((prod) =>
            prod.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );

    }, [productos, searchTerm]);

    return (
        <Container className="mt-4">
            <h1 className={styles.subtitulo}>Productos</h1>

            {/* Barra de búsqueda */}

            <div className={styles.buscadorContainer}>

                <InputGroup className={styles.buscador}>

                    <InputGroup.Text>
                        <FaSearch />
                    </InputGroup.Text>

                    <Form.Control
                        type="text"
                        placeholder=" Buscar por diseño......"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                </InputGroup>
                <p className={styles.resultados}>
                    Se encontraron {productosFiltrados.length} productos.
                </p>

            </div>

            <div className={styles.listaProductos}>
                {/* 5. Mapeamos el estado `productos` para renderizar cada
uno */}


                {productosFiltrados.length > 0 ? (


                    productosFiltrados.map(prod => (



                        < Col className={styles.productos} key={prod.id}>
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
                        </Col>
                    ))
                ) : (
                    <p className="text-center">
                        No se encontraron productos.
                    </p>

                )}

            </div>

        </Container >




    );
};
export default ProductosBD;