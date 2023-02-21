import classnames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";

import Checkmark from "./components/checkmark";
import Switch from "./components/switch";
import styles from "./index.css";


const variants = {
  checkbox: styles.checkbox,
  switch: styles.switch,
};

const componentTypes = {
  checkbox: Checkmark,
  switch: Switch,
};

export default class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    iconClassName: PropTypes.string,
    innerRef: PropTypes.func,
    theme: PropTypes.oneOf(["alt"]),
    variant: PropTypes.oneOf(["checkbox", "switch"]),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    checked: false,
    children: undefined,
    className: undefined,
    disabled: false,
    error: false,
    iconClassName: undefined,
    innerRef: undefined,
    theme: undefined,
    variant: "checkbox",
    onChange: undefined,
    onClick: undefined,
  }

  inputNode = null;

  render() {
    const {
      checked,
      children,
      className,
      disabled,
      error,
      iconClassName,
      innerRef,
      theme,
      variant,
      ...restProps
    } = this.props;

    const ariaDisabled = disabled || undefined;
    const ariaInvalid = error || undefined;
    const containerClassNames = [styles.container, variants[variant]];
    const Icon = componentTypes[variant];

    return (
      <label className={styles.label}>
        <span className={classnames(containerClassNames)}>
          <input
            {...restProps}
            ref={this.setRef}
            aria-disabled={ariaDisabled}
            aria-invalid={ariaInvalid}
            checked={checked}
            className={styles.input}
            type="checkbox"
            onChange={this.onChange}
          />
          <Icon
            checked={checked}
            className={iconClassName}
            disabled={disabled}
            error={error}
            theme={theme}
          />
        </span>
        <span className={styles.labelText}>
          {children}
        </span>
      </label>
    );
  }

  setRef = (node) => {
    const { innerRef } = this.props;
    if (!node || node === this.inputNode) {
      return;
    }

    innerRef?.(node);
    this.inputNode = node;
  }

  onChange = (event) => {
    const { disabled, onChange } = this.props;

    if (disabled) {
      return;
    }

    onChange?.(event);
  }
}

export { default as UncontrolledCheckbox } from "./uncontrolled";
