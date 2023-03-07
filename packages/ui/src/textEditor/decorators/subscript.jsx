import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Subscript extends Component {
  static propTypes = { children: PropTypes.array.isRequired }

  render() {
    const { children } = this.props;

    return (
      <sub>
        {children}
      </sub>
    );
  }
}
