import CSS from "csstype";
import React from "react";
import { Component } from "react";

const styles: { [key: string]: CSS.Properties } = {
  bubbleAlert: {
    backgroundColor: "#E9725A",
    borderRadius: "15px",
    color: "#fff",
    padding: "2px 10px",
    fontSize: "0.9rem",
    width: "20px",
  },
};

type bubleAlertProps = {
  value: number,
}

class BubbleAlert extends Component<bubleAlertProps> {
  getNumber(n) {
    if (!n) {
      return " ";
    }
    return n > 9 ? "9+" : n;
  }
  render() {
    const { value } = this.props;
    return <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>;
  }
}

export default BubbleAlert;
