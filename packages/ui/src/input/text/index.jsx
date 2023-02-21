import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./index.css";


const themes = {
  default: styles.defaultTheme,
  underline: styles.underlineTheme,
};

export default class TextInput extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    theme: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  }

  static defaultProps = {
    children: null,
    className: undefined,
    disabled: false,
    error: false,
    type: "text",
    theme: "default",
    value: undefined,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
  }

  state = { isInputFocused: false }

  render() {
    const { className, children, disabled, error, theme, ...props } = this.props;
    const { isInputFocused } = this.state;

    const classNames = [
      styles.container,
      className,
      themes[theme],
      { [styles.isFocused]: isInputFocused },
      { [styles.error]: error },
      { [styles.isDisabled]: disabled },
    ];

    return (
      <div className={classnames(classNames)}>
        <input
          {...props}
          aria-disabled={disabled || undefined}
          aria-invalid={error || undefined}
          className={styles.input}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
        {children}
      </div>
    );
  }

  onFocus = (e) => {
    this.setState({ isInputFocused: true });
    this.props.onFocus?.(e);
  };

  onBlur = (e) => {
    this.setState({ isInputFocused: false });
    this.props.onBlur?.(e);
  }

  onChange = (e) => {
    const { disabled, onChange } = this.props;

    if (disabled) {
      return;
    }

    onChange?.(e);
  }
}
