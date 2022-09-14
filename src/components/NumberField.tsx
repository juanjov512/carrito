import CSS from "csstype";
import React from "react";
import { Component } from "react";

const styles: { [key: string]: CSS.Properties } = {
  field: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "5px 10px",
    border: "2px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};


class NumberField extends Component<any> {
  render() {
    return <input style={styles.field} {...this.props} />;
  }
}

export default NumberField;
