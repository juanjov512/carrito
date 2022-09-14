import CSS from "csstype";
import React from "react";
import { Component } from "react";

const styles: { [key: string]: CSS.Properties } = {
  title: {
    marginBottom: "30px",
  },
};

class Title extends Component {
  render() {
    return <h1 style={styles.title}>Tienda</h1>;
  }
}

export default Title;
