import CSS from "csstype";
import React from "react";
import { Component } from "react";
import { IItem } from "../interfaces/Interfaces";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles: { [key: string]: CSS.Properties } = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  buble: {
    position: "relative",
    left: "12",
    top: "20",
  },
};

type carroProps = {
  carro: IItem[],
  esCarroVisible: boolean,
  mostrarCarro: any,
}

class Carro extends Component<carroProps> {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.buble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button style={styles.carro} onClick={mostrarCarro}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
