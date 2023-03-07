import PropTypes from "prop-types";
import React, { Component } from "react";

import Checkbox from "./index";


export default class UncontrolledCheckbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    checked: false,
    onChange: undefined,
  }

  constructor(...args) {
    super(...args);

    const { checked } = this.props;
    this.state = { checked };
  }

  render() {
    const { checked } = this.state;

    return (
      <Checkbox
        {...this.props}
        checked={checked}
        onChange={this.onChange}
      />
    );
  }

  onChange = (e) => {
    const { onChange } = this.props;

    this.setState((prevState) => {
      return { checked: !prevState.checked };
    },
    () => onChange?.(e, this.state.checked));
  }
}
