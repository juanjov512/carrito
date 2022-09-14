import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import React from "react";
import { IItem, IProducto } from "./interfaces/Interfaces";

interface IState {
  productos: IProducto[],
  carro: IItem[],
  esCarroVisible: boolean,
}

class App extends Component {
  state: IState = {
    productos: [
      {
        sku: "DEF",
        img: "/productos/tomate.jpg",
        nombre: "Tomate",
        descripcion: "Tomate con precio normal",
        precioUnitario: 1000,
        unidadesDisponibles: 5,
      },
      {
        sku: "ESP",
        img: "/productos/arbejas.jpg",
        nombre: "Arbejas",
        descripcion: "Arebja con precio especial del 20%",
        precioUnitario: 1000,
        unidadesDisponibles: 10,
      },
      {
        sku: "PESO",
        img: "/productos/lechuga.jpg",
        nombre: "Lechuga",
        descripcion: "Lechuga con precio por peso",
        precioUnitario: 1000,
        unidadesDisponibles: 20,
      },
    ],
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto: IProducto) => {
    const { carro } = this.state;
    if (carro.find((item: IItem) => item.producto.nombre === producto.nombre)) {
      const newCarro = carro.map((item: IItem) =>
        item.producto.nombre === producto.nombre
          ? {
              producto: item.producto,
              cantidad: item.cantidad + 1,
            }
          : item
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        producto: producto,
        cantidad: 1,
      }),
    });
  };

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
