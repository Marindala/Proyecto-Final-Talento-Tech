import React, { useState, useEffect, useMemo } from 'react';
import styles from "./ProductosBD.module.css";
import { FaSearch } from "react-icons/fa";
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto.jsx';
import { Container, Col, InputGroup, Form } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config.js';
import Pagination from '../Pagination/Pagination.jsx';

const ProductosBD = () => {

    const [productos, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);

    const productosPorPagina = 8;

    useEffect(() => {
        const productosDB = collection(db, "productos nacionales");

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
        });
    }, []);

    // Filtrar productos
    const productosFiltrados = useMemo(() => {
        return productos.filter((prod) =>
            prod.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [productos, searchTerm]);

    // Volver siempre a la página 1 cuando se busca
    useEffect(() => {
        setPaginaActual(1);
    }, [searchTerm]);

    // PAGINACIÓN
    const indiceUltimo = paginaActual * productosPorPagina;
    const indicePrimero = indiceUltimo - productosPorPagina;

    const productosVisibles = productosFiltrados.slice(
        indicePrimero,
        indiceUltimo
    );

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
                        placeholder="Buscar por diseño..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                </InputGroup>

                <p className={styles.resultados}>
                    Se encontraron {productosFiltrados.length} productos.
                </p>

            </div>

            <div className={styles.listaProductos}>

                {productosVisibles.length > 0 ? (

                    productosVisibles.map((prod) => (

                        <Col className={styles.productos} key={prod.id}>

                            <TarjetaProducto
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

            <Pagination
                productosPorPagina={productosPorPagina}
                totalProductos={productosFiltrados.length}
                paginaActual={paginaActual}
                setPaginaActual={setPaginaActual}
            />

        </Container>
    );
};

export default ProductosBD;