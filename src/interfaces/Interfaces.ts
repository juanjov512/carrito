import { Component } from "react";

interface IProducto {
  sku: string,
  img: string,
  nombre: string,
  descripcion: string,
  precioUnitario: number,
  unidadesDisponibles: number,
}

interface IItem {
  cantidad: number,
  producto: IProducto,
  manejadorCalculadores?: IManejadorCalculadores,
}

interface IManejadorCalculadores {
  calcularPrecio: (sku: string, precio: number, cantidad: number) => number;
}

type TCalcularPrecioProps = {
  precio: number,
  cantidad: number,
}

export { IProducto, IItem, TCalcularPrecioProps }