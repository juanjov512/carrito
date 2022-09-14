import { CalculadorPrecio } from "../../interfaces/CalculadorPrecio";
import { CalcularPrecioEspecial } from "./CalcularPrecioEspecial";
import { CalcularPrecioNormal } from "./CalcularPrecioNormal";
import { CalcularPrecioPeso } from "./CalcularPrecioPeso";

export class ManejadorCalculadores {

  private aplica(sku: string): CalculadorPrecio {
    if (sku === "ESP") {
      return new CalcularPrecioEspecial();
    }
    if (sku === "PESO") {
      return new CalcularPrecioPeso();
    }
    return new CalcularPrecioNormal();
  }

  calcularPrecio(sku: string, precio: number, cantidad: number): number {
    return this.aplica(sku).calcularTotal(precio, cantidad);
  }
} 