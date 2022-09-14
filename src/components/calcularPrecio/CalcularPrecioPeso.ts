import { CalculadorPrecio } from "../../interfaces/CalculadorPrecio";

export class CalcularPrecioPeso implements CalculadorPrecio {
  calcularTotal = (precio: number, cantidad: number): number => precio * cantidad;
}
