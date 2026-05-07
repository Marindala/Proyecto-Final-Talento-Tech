//Recibe los datos y las funciones por props.
import styles from "./ProductForm.module.css"
export function ProductForm({ datosForm,
    manejarCambio,
    handleFormSubmit,
    manejarCambioImagen, loading }) {

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '24rem',
        margin: '3rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        gap: '16px'
    };

     if (loading) {
    return <div className={styles.loader}></div>;
  }
    return (
        <form style={formStyle} onSubmit={handleFormSubmit}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label>Nombre del Producto:</label>

                <input
                    type="text"
                    placeholder="Ej: Buzo Lanilla..."
                    name="nombre" // Atributo clave para identificar el input
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Precio:</label>
                <input
                    type="number"
                    placeholder="Ej: 95"
                    name="precio" // Atributo clave
                    value={datosForm.precio}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    placeholder="Ej: 5"
                    name="stock" // Atributo clave
                    value={datosForm.stock}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Imagen:</label>
                <input
                    type="file"
                    placeholder="https://..."
                    name="imagen" // Atributo clave
                    onChange={manejarCambioImagen}
                /*                 ❌ 1. input type="file" NO usa value
            
            Los inputs de archivo no pueden ser controlados con value en React.
            
            👉 Eso rompe la carga del archivo.
             */

                />
            </div>
            <button type="submit" disabled={loading}> {loading ? 'Subiendo...' : 'Guardar Producto'}</button>
        </form>
    );
}
/*  <input
   name="nombre"
   value={datosForm.nombre}
   onChange={manejarCambio}
 />
 
 <button type="submit">Guardar</button>
</form>
);
} */