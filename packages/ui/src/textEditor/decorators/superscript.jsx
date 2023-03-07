import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Superscript extends Component {
  static propTypes = { children: PropTypes.array.isRequired }

  render() {
    const { children } = this.props;

    return (
      <sup>
        {children}
      </sup>
    );
  }
}
