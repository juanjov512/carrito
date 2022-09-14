import CSS from 'csstype';
import React from "react";
import { Component } from "react";

const styles: { [key: string]: CSS.Properties } = {
  layout: {
    backgroundColor: "#fff",
    color: "#0A283E",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    width: "62%",
  },
};

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
