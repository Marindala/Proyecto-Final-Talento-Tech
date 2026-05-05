import { useState } from 'react'
import { FormularioProducto } from '../FormularioProducto/FormularioProducto';

function FormularioContainer() {
    // 1. Guarda los datos en el estado
    const [datosForm, setDatosForm] = useState({
        nombre: '', precio: '', stock: '', image: "" // Quitamos la urlImagen de aca porque la obtendremos después de la subida
    });

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


    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        // Validamos que el usuario haya seleccionado una imagen
        if (!imagenFile) {
            alert("Seleccioná una imagen primero");
            return;
        }
        // --- Lógica para subir la imagen a Imgbb ---
        const apiKey = 'bb473b1e2c22cb344a4767460a6ddfcf'; //  ¡Aquí va tu clave!
        const formData = new FormData();
        formData.append('image', imagenFile);
        console.log(imagenFile);

        try {
            console.log("Subiendo imagen a Imgbb...");
            const respuestaImgbb = await
                fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: 'POST',
                    body: formData,
                });
            const imgbbData = await respuesta.json();
            /* const urlImagen = imgbbData.data.url;

            const productoCompleto = { ...datosForm, urlImagen: urlImagen };
            console.log('Producto listo para enviar:', productoCompleto);
        }; */
            if (datosImgbb.success) {
                console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
                // Unimos la URL de la imagen con el resto de los datos del
                formulario
                const productoCompleto = {
                    ...datosForm,
                    // Agregamos la URL obtenida
                    urlImagen: datosImgbb.data.url
                };
                // Por el momento hacemos un console.log
                console.log('Enviando los siguientes datos COMPLETOS a la API:',
                    productoCompleto);
            } else {
                throw new Error('La subida de la imagen a Imgbb falló.');
            }
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
}
    };

    // 3. Conecta la lógica con la vista
    return (
        <FormularioProducto
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            manejarCambioImagen={manejarCambioImagen}
        />
    );
}

export default FormularioContainer;