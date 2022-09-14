import CSS from 'csstype';
import React from "react";
import { Component } from "react";
import Producto from "./Producto";
import { IProducto } from "../interfaces/Interfaces"

const styles: { [key: string]: CSS.Properties } = {
  productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

type productoProps = {
  productos: IProducto[],
  agregarAlCarro: any,
}

class Productos extends Component<productoProps> {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
      <div style={styles.productos}>
        {productos.map((producto) => (
          <Producto
            agregarAlCarro={() => agregarAlCarro(producto)}
            key={producto.nombre}
            producto={producto}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
