import CSS from "csstype";
import React from "react";
import { Component } from "react";
import { IItem } from "../interfaces/Interfaces";
import CalcularPrecio from "./CalcularPrecio";

const styles: { [key: string]: CSS.Properties } = {
  detallesCarro: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: "30px",
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: "50px",
  },
  ul: {
    margin: "0px",
    padding: "0px",
  },
  producto: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
};

type detallesCarroProps = {
  carro: IItem[],
}

class DetallesCarro extends Component<detallesCarroProps> {
  render() {
    const { carro } = this.props;
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((item: IItem) => (
            <li style={styles.producto} key={item.producto.nombre}>
              <img alt={item.producto.nombre} src={item.producto.img} width="50" height="32" />
              {item.producto.nombre} <span>{item.cantidad}</span>
              <CalcularPrecio sku={item.producto.sku} precio={item.producto.precioUnitario} cantidad={item.cantidad} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
