import CSS from "csstype";
import React from "react";
import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro";

const styles: { [key: string]: CSS.Properties } = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "80px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.1)",
  },
};

type navbarProps = {
  carro: any,
  esCarroVisible: boolean,
  mostrarCarro: () => void,
}

class Navbar extends Component<navbarProps> {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro
          carro={carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={mostrarCarro}
        />
      </nav>
    );
  }
}

export default Navbar;
