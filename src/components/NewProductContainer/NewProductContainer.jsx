import { useState } from 'react'
import { ProductForm } from '../ProductForm.jsx/ProductForm';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

function NewProductContainer() {
    // 1. Guarda los datos en el estado
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        precio: '',
        stock: '',
        categoria: '' // Quitamos la urlImagen de aca porque la obtendremos después de la subida
    });

    const [loading, setLoading] = useState(false);

    const [imagenFile, setImagenFile] = useState(null);

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
        // Validamos que el usuario haya seleccionado una imagen
        if (!imagenFile) {
            alert("Seleccioná una imagen primero");
            return;
            console.log('Enviando producto a Firebase:',
                productoCompleto);
        }

        setLoading(true);
        console.log("Loading...");


        // --- Lógica para subir la imagen a Imgbb ---
        const apiKey = 'bb473b1e2c22cb344a4767460a6ddfcf'; //  ¡Aquí va tu clave!
        const formData = new FormData();
        formData.append('image', imagenFile);
        console.log(imagenFile);
        setLoading(true);

        try {
            console.log("Subiendo imagen a Imgbb...");

            const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,
                {
                    method: 'POST',
                    body: formData,
                });
            const imgbbData = await respuestaImgbb.json();

            const Imagen = imgbbData.data.url;

            const productoCompleto = { ...datosForm, Imagen: Imagen };
            console.log('Producto listo para enviar:', productoCompleto);

            if (imgbbData.success) {
                console.log("Imagen subida con éxito. URL:", imgbbData.data.url);
                // Unimos la URL de la imagen con el resto de los datos del
                //formulario
                alert("Imagen subida con éxito ✅");


                const productoCompleto = {
                    Nombre: datosForm.nombre,
                    Precio: datosForm.precio,
                    Stock: datosForm.stock,
                    Categoria: datosForm.categoria,
                    Imagen: imgbbData.data.url
                };
                // Por el momento hacemos un console.log
                console.log('Enviando producto a Firebase',
                    productoCompleto);
                // Obtenemos la instancia de la base de datos
                const db = getFirestore();
                try {
                    if (productoAEditar) {
                        const docRef = doc(db, "productos nacionales",
                            productoAEditar.id);
                        // update
                        await updateDoc(docRef, productoFinal);
                        alert("Producto actualizado con éxito.");
                    } else {
                        // create
                        await addDoc(collection(db, "productos nacionales"),
                            productoCompleto);
                        alert("Producto guardado con éxito.");
                    }
                    // ... (reseteo de formulario) ...
                } catch (error) {
                    console.error("Error:", error);
                }
            };




            //const productosCollection = collection(db, "productos nacionales");
            // Agregamos el nuevo documento a la colección
            //await addDoc(productosCollection, productoCompleto);




            //} else {
            //throw new Error('La subida de la imagen a Imgbb falló.');
        }
        // } catch (error) {
        // console.error("Error en el proceso de envío:", error);
        // alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
        // }

        //Ejercicio Clase 6
        //Paso 3
        finally {
            //Desactivar loading
            setLoading(false);
        }
    };
    // 3. Conecta la lógica con la vista
    return (
        <ProductForm
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            handleFormSubmit={handleFormSubmit}
            manejarCambioImagen={manejarCambioImagen}
            loading={loading}
        />
    );
}

export default NewProductContainer;