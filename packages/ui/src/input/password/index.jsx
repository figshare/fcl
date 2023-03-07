import React, { Component } from "react";
import PropTypes from "prop-types";
import EyeVisible from "@figshare/ui/icons/eye/visible/small";
import EyeInvisible from "@figshare/ui/icons/eye/invisible/small";
import { IconButton } from "@figshare/ui/button";
import TextInput from "@figshare/ui/input/text";


const iconMap = {
  text: EyeVisible,
  password: EyeInvisible,
};

export default class Password extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    theme: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    disabled: false,
    error: false,
    theme: "default",
    value: undefined,
    onChange: undefined,
  }

  state = { isPasswordVisible: false }

  render() {
    const { disabled, ...props } = this.props;
    const { isPasswordVisible } = this.state;

    const type = isPasswordVisible ? "text" : "password";
    const Icon = iconMap[type];
    const tooltip = this.getTooltipText(type);

    return (
      <TextInput {...props} type={type}>
        <IconButton
          Icon={Icon}
          disabled={disabled}
          size="S"
          theme="tertiary"
          onClick={this.onToggleVisibility}
        >
          {tooltip}
        </IconButton>
      </TextInput>
    );
  }

  onToggleVisibility = () => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.setState((prevState) => {
      return { isPasswordVisible: !prevState.isPasswordVisible };
    });
  }

  getTooltipText = () => {
    const { isPasswordVisible } = this.state;

    return isPasswordVisible ? "Show password" : "Hide password";
  }
}
