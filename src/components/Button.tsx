import CSS from "csstype";
import React from "react";
import { Component } from "react";

const styles: { [key: string]: CSS.Properties } = {
  button: {
    backgroundColor: "#0A283E",
    color: "#fff",
    padding: "15px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};


class Button extends Component<any> {
  render() {
    return <button style={styles.button} {...this.props} />;
  }
}

export default Button;
