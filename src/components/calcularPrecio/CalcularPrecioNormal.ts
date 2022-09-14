import { CalculadorPrecio } from "../../interfaces/CalculadorPrecio";

export class CalcularPrecioNormal implements CalculadorPrecio {
  calcularTotal = (precio: number, cantidad: number): number => precio * cantidad;
}
