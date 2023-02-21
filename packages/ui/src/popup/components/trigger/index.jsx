import PropTypes from "prop-types";
import React, { Component } from "react";


export default class Trigger extends Component {
  static propTypes = {
    triggerId: PropTypes.string.isRequired,
    displayedAs: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
    innerRef: PropTypes.func,
  }

  static defaultProps = {
    displayedAs: "button",
    innerRef: undefined,
  }

  render() {
    const {
      displayedAs: Comp,
      triggerId,
      innerRef,
      ...restProps
    } = this.props;

    const refProp = (typeof Comp === "string") ? { ref: innerRef } : { innerRef };

    return (
      <Comp
        {...restProps}
        {...refProp}
        id={triggerId}
      />
    );
  }
}
