import PropTypes from "prop-types";
import React, { Component } from "react";

import Toggletip from "./index";


export default class UncontrolledToggletip extends Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    onToggle: PropTypes.func,
  }

  static defaultProps = {
    isVisible: false,
    onToggle: undefined,
  }

  constructor(...args) {
    super(...args);

    this.state = { isVisible: this.props.isVisible };
  }

  render() {
    const { isVisible } = this.state;

    return (
      <Toggletip
        {...this.props}
        isVisible={isVisible}
        onToggle={this.onToggle}
      />
    );
  }

  onToggle = (e) => {
    const { onToggle } = this.props;

    e?.stopPropagation?.();

    this.setState((prevState) => {
      return { isVisible: !prevState.isVisible };
    }, () => onToggle?.(e, this.state.isVisible));
  }
}
