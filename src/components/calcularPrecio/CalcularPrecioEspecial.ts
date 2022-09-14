import { CalculadorPrecio } from "../../interfaces/CalculadorPrecio";

export class CalcularPrecioEspecial implements CalculadorPrecio {
  calcularTotal = (precio: number, cantidad: number): number => (precio * 0.8) * cantidad;
}
