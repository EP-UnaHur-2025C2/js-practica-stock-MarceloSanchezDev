export const validaciones = [
  {
    nombre: "stock",
    fn: (valor, producto) => {
      return producto.stock >= valor;
    },
  },
  {
    nombre: "categoria",
    fn: (valor, producto) => {
      return valor.includes(producto.categorias);
    },
  },
];

export function ejecutarValidacion(nombre, valor, producto) {
  const validacion = validaciones.find((v) => v.nombre === nombre);
  if (!validacion) return false;
  return validacion.fn(valor, producto);
}
