//Recibe los datos y las funciones por props.
import { useEffect } from 'react'
import styles from "./ProductForm.module.css"
export function ProductForm({ datosForm, setDatosForm,
    manejarCambio,
    handleFormSubmit,
    manejarCambioImagen, loading, imagenInputRef, productoEditar }) {

   /*  const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '24rem',
        margin: '3rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        gap: '16px'
    };
 */
    useEffect(() => {
        if (productoEditar) {
            setDatosForm({
                nombre: productoEditar.Nombre,
                precio: productoEditar.Precio,
                stock: productoEditar.Stock,
                categoria: productoEditar.Categoria,
            });
        } else {
            setDatosForm({
                nombre: '',
                precio: '',
                stock: '',
                categoria: ''
            });


        }
    }, [productoEditar]);
    /*     if (loading) {
       return <div className={styles.loader}></div>;
     } */
    return (
        <form className={styles.formulario} onSubmit={handleFormSubmit}>
            {loading && <div className={styles.loader}></div>}
            <h3>Agregar Nuevo Producto</h3>
            <div className={styles.campo}>
                <label>Nombre del Producto:</label>

                <input
                    type="text"
                    placeholder="Ej: Buzo Lanilla..."
                    name="nombre" // Atributo clave para identificar el input
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                />
            </div>
            <div className={styles.campo}>
                <label>Categoría:</label>
                <input
                    type="text"
                    placeholder="Ej: Remeras, Buzos"
                    name="categoria"
                    value={datosForm.categoria}
                    onChange={manejarCambio}
                />
            </div>
            <div className={styles.campo}>
                <label>Precio:</label>
                <input
                    type="number"
                    placeholder="Ej: 95"
                    name="precio" // Atributo clave
                    value={datosForm.precio}
                    onChange={manejarCambio}
                />
            </div>
            <div className={styles.campo}>
                <label>Stock:</label>
                <input
                    type="number"
                    placeholder="Ej: 5"
                    name="stock" // Atributo clave
                    value={datosForm.stock}
                    onChange={manejarCambio}
                />
            </div>
            <div className={styles.campo}>
                <label>Imagen:</label>
                <input
                    type="file"
                    ref={imagenInputRef}
                    placeholder="https://..."
                    name="imagen" // Atributo clave
                    onChange={manejarCambioImagen}
                /*                 ❌ 1. input type="file" NO usa value
            
            Los inputs de archivo no pueden ser controlados con value en React.
            
            👉 Eso rompe la carga del archivo.
             */

                />
            </div>
            <button  className={styles.boton} type="submit" disabled={loading}> {loading ? 'Subiendo...' : 'Guardar Producto'}</button>
        </form>
    );
}
