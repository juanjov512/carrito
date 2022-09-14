import React from "react";
import { Component } from "react";
import { ManejadorCalculadores } from "./calcularPrecio/ManejadorCalculadores";

type calcularPrecioProps = {
  sku: string,
  precio: number,
  cantidad: number,
}

class CalcularPrecio extends Component<calcularPrecioProps> {
  render() {
    const {sku, precio, cantidad} = this.props

    const calcularTotal = new ManejadorCalculadores().calcularPrecio(sku, precio, cantidad);
    const formatoMoneda = (num: number): string => {
      return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return <span>{formatoMoneda(calcularTotal)}</span>
  }
}

export default CalcularPrecio;
