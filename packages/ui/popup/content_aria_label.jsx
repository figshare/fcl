import PropTypes from "prop-types";
import React, { Component } from "react";

import { LinkingReference } from "../a11y/linking";


export default class AriaLabel extends Component {
  static propTypes = { children: PropTypes.func.isRequired }

  render() {
    return (
      <LinkingReference forAttributes="aria-labelledby">
        {this.renderChildren}
      </LinkingReference>
    );
  }

  renderChildren = ({ referenceProps }) => {
    const { children } = this.props;

    return children({ aria: { ...referenceProps } });
  }
}
