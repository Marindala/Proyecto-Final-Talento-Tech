import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function ProductoDetalle() {

  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {

    fetch("/data/productos.json")
      .then((respuesta) => respuesta.json())
      .then((data) => {

        const productoEncontrado = data.find(
          (prod) => prod.id === Number(id)
        );

        setProducto(productoEncontrado);

      });

  }, [id]);

  if (!producto) {
    return <h2>Cargando producto...</h2>;
  }

  return (
    <div style={{ padding: "2rem" }}>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        width="300"
      />

      <h1>{producto.nombre}</h1>

      <p>{producto.descripcion}</p>

      <h2>${producto.precio}</h2>

      <p>Stock: {producto.stock}</p>

    </div>
  );
}

export default ProductoDetalle;