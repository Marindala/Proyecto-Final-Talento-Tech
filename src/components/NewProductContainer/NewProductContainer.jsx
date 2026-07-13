import { useState, useRef } from 'react'
import { ProductForm } from '../ProductForm.jsx/ProductForm';
import { getFirestore, collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { toast } from "react-toastify";

function NewProductContainer({ productoEditar, setProductoEditar, fetchProductos }) {
    // 1. Guarda los datos en el estado
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        precio: '',
        stock: '',
        categoria: '' // Quitamos la urlImagen de aca porque la obtendremos después de la subida
    });
    const db = getFirestore();
    const [loading, setLoading] = useState(false);

    const [imagenFile, setImagenFile] = useState(null);
    const imagenInputRef = useRef(null);

    // 2. Nueva función para manejar el cambio del input de tipo "file"
    const manejarCambioImagen = (evento) => {
        //setImagenFile(evento.target.files[0]);
        const file = evento.target.files[0];
        setImagenFile(file);

    };

    // 2. Define las funciones
    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm({
            ...datosForm, [name]: value
        });
    };


    const handleFormSubmit = async (evento) => {
        evento.preventDefault();

        setLoading(true);

        try {

            let imagenUrl = productoEditar?.Imagen || "";

            // Si eligió una imagen nueva, la subimos
            if (imagenFile) {

                const apiKey = 'bb473b1e2c22cb344a4767460a6ddfcf';

                const formData = new FormData();
                formData.append('image', imagenFile);

                const respuestaImgbb = await fetch(
                    `https://api.imgbb.com/1/upload?key=${apiKey}`,
                    {
                        method: 'POST',
                        body: formData,
                    }
                );

                const imgbbData = await respuestaImgbb.json();

                if (!imgbbData.success) {
                    throw new Error("No se pudo subir la imagen");
                }

                imagenUrl = imgbbData.data.url;
            }


            const productoCompleto = {
                Nombre: datosForm.nombre,
                Precio: Number(datosForm.precio),
                Stock: Number(datosForm.stock),
                Categoria: datosForm.categoria,
                Imagen: imagenUrl
            };


            // EDITAR PRODUCTO
            if (productoEditar) {

                await updateDoc(
                    doc(db, "productos nacionales", productoEditar.id),
                    productoCompleto
                );

                fetchProductos();
                setProductoEditar(null);

                alert("Producto actualizado correctamente ✅");


            } else {

                // CREAR PRODUCTO
                await addDoc(
                    collection(db, "productos nacionales"),
                    productoCompleto
                );
                fetchProductos();

                /* alert("Producto creado correctamente ✅"); */
                toast.success("Producto creado correctamente ✅");
            }


            // limpiar formulario
            setDatosForm({
                nombre: "",
                precio: "",
                stock: "",
                categoria: ""
            });

            setImagenFile(null);

        } catch (error) {

            console.error("Error guardando producto:", error);
            alert("Hubo un error al guardar el producto");

        } finally {

            setLoading(false);

        }
    };

    // 3. Conecta la lógica con la vista
    return (
        <ProductForm
            datosForm={datosForm}
            setDatosForm={setDatosForm}
            productoEditar={productoEditar}
            manejarCambio={manejarCambio}
            handleFormSubmit={handleFormSubmit}
            manejarCambioImagen={manejarCambioImagen}
            imagenInputRef={imagenInputRef}
            loading={loading}
        />
    );
}

export default NewProductContainer;