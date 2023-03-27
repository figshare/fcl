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
    /**
      Additional, optional content to be prepended to the input.
     */
    children: PropTypes.node,
    /**
      Optional extra class given to the input wrapper node.
     */
    className: PropTypes.string,
    /**
      Disable the input. Input can be focused or tabbed through,
      but will be read only and it's value cannot be modified.
     */
    disabled: PropTypes.bool,
    /**
      Mark the input as being in an error state, visually,
     */
    error: PropTypes.bool,
    /**
      Input style variation. Supported variations: `["default", "underline"]`
     */
    theme: PropTypes.string,
    /**
      Input type. Same attribute values as `<input type />`
     */
    type: PropTypes.string,
    /**
      Input value.
     */
    value: PropTypes.string,
    /**
      Function called when input is blurred.
     */
    onBlur: PropTypes.func,
    /**
      Function called when input value changes. Will be called with the `change event`.
     */
    onChange: PropTypes.func,
    /**
      Function called when input receives focus.
     */
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