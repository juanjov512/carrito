import CSS from "csstype";
import React from "react";
import { Component } from "react";

const styles: { [key: string]: CSS.Properties } = {
  logo: {
    fontWeight: "700",
    fontSize: "2rem",
  },
};

class Logo extends Component {
  render() {
    return <div style={styles.logo}>Shop</div>;
  }
}

export default Logo;
