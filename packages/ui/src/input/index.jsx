import PropTypes from "prop-types";
import React, { Component } from "react";

import Checkbox from "./checkbox";
import Date from "./date";
import Password from "./password";
import Text from "./text";


const typesMap = {
  checkbox: Checkbox,
  date: Date,
  password: Password,
  text: Text,
};


export class Input extends Component {
  static propTypes = { type: PropTypes.string.isRequired }

  render() {
    const { type, ...props } = this.props;
    const InputType = typesMap[type];

    if (!InputType) {
      return null;
    }

    return <InputType {...props} />;
  }
}

export default Input;
