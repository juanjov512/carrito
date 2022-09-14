import CSS from 'csstype';
import React from "react";
import { Component } from "react";
import Button from "./Button";
import { IProducto } from "../interfaces/Interfaces"
import NumberField from "./NumberField"

const styles: { [key: string]: CSS.Properties } = {
  producto: {
    border: "solid 1px #eee",
    boxShadow: "0 5px 5px rgb(0, 0, 0, 0.1)",
    width: "25%",
    padding: "10px 15px",
    borderRadius: "5px",
  },
  img: {
    width: "100%",
  },
};

type productoProps = {
  producto: IProducto,
  agregarAlCarro: any,
}

class Producto extends Component<productoProps> {
  render() {
    const { producto, agregarAlCarro }: productoProps = this.props;
    const currencyFormat = (num: number): string => {
      return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const handleBtnClick = (event: React.MouseEvent<HTMLImageElement>) => {
      event.stopPropagation()
      agregarAlCarro(producto)
    }
    return (
      <div style={styles.producto}>
        <img style={styles.img} alt={producto.nombre} src={producto.img} />
        <h3>{producto.nombre}</h3>
        <p>{currencyFormat(producto.precioUnitario)}</p>
        <p>{producto.descripcion}</p>
        <Button onClick={handleBtnClick}>
          Agrergar al carro
        </Button>
      </div>
    );
  }
}

export default Producto;
