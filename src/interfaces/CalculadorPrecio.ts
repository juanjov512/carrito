export interface CalculadorPrecio {
  calcularTotal: (precio: number, cantidad: number) => number;
}