import { Item } from "../Item/Item";

export function ItemList({ productos }) {
return (
<div style={{ display: 'flex', gap: '20px' }}>
{productos.map(prod => (
<Item key={prod.id} {...prod} />
))}
</div>
);
}

//Detalles del código:
/* 1. Con el div agrupamos los elementos y le damos estilo en línea a este grupo
puntualmente.
2. Con el mapeo, lo que estamos haciendo es lo siguiente: para cada "prod" en el array
"productos", creamos un componente "Item", al que le pasamos una "key" única.
(Muy importante para optimizar)
3. Usamos el spread operator {...prod} para pasar todas las propiedades del objeto
"prod" (id, nombre, precio, stock) como props individuales al componente Item
❓🧠¿Cómo harías para mapear los productos y mostrar solamente los que tengas
stock? */


/* {productos
  .filter(prod => prod.stock > 0)
  .map(prod => (
    <Item key={prod.id} {...prod} />
  ))
} */