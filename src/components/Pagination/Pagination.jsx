import styles from "./Pagination.module.css";

function Pagination({ productosPorPagina, totalProductos, paginaActual, setPaginaActual }) {

  const cantidadPaginas = Math.ceil(totalProductos / productosPorPagina);

  return (
    <div className={styles.pagination}>

      {Array.from({ length: cantidadPaginas }, (_, index) => (
        <button
          key={index}
          onClick={() => setPaginaActual(index + 1)}
          className={paginaActual === index + 1 ? styles.active : ""}
        >
          {index + 1}
        </button>
      ))}

    </div>
  );
}

export default Pagination;