import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./index.css";


const themes = {
  underline: styles.underlineTheme,
  default: styles.defaultTheme,
};

export default class Textarea extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    theme: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    className: undefined,
    theme: "default",
    error: false,
    disabled: false,
    onChange: undefined,
    value: "",
  }

  render() {
    const { className, disabled, error, theme, onChange, ...restProps } = this.props;

    const classNames = [styles.textarea, className, themes[theme]];

    return (
      <textarea
        {...restProps}
        aria-disabled={disabled || undefined}
        aria-invalid={error || undefined}
        className={classnames(classNames)}
        onChange={this.onChange}
      />
    );
  }

  onChange = (e) => {
    const { disabled, onChange } = this.props;

    if (disabled) {
      return;
    }

    onChange?.(e);
  }
}
