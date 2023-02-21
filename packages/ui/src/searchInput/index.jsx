import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { IconButton } from "@figshare/ui/button";

import { sizes, iconSizes } from "./constants";
import styles from "./index.css";


const themes = {
  default: styles.defaultContainer,
  underline: styles.underlineContainer,
};

export default class SearchInput extends PureComponent {
  static propTypes = {
    action: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    method: PropTypes.string,
    size: PropTypes.oneOf(Object.keys(sizes)),
    theme: PropTypes.oneOf(Object.keys(themes)),
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
  }

  static defaultProps = {
    action: undefined,
    className: undefined,
    disabled: false,
    error: false,
    method: "get",
    size: "S",
    theme: "default",
    value: undefined,
    onChange: undefined,
    onSubmit: undefined,
  }

  state = { isInputFocused: false }

  render() {
    const { className, disabled, error, method, size, theme, action, onSubmit, ...props } = this.props;
    const { isInputFocused } = this.state;
    const SubmitIcon = iconSizes.submit[size];

    const classNames = [
      styles.container,
      className,
      themes[theme],
      { [styles.isFocused]: isInputFocused },
      { [styles.error]: error },
      { [styles.isDisabled]: disabled },
    ];

    return (
      <form
        action={action}
        className={classnames(classNames)}
        method={method}
        role="search"
        onSubmit={onSubmit}
      >
        <input
          {...props}
          aria-disabled={disabled || undefined}
          aria-invalid={error || undefined}
          className={styles.input}
          data-size={size}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
        {this.renderClearIcon()}
        <IconButton Icon={SubmitIcon} size={size} theme="tertiary" type="submit">
          Search
        </IconButton>
      </form>
    );
  }

  renderClearIcon = () => {
    const { size, value } = this.props;
    const ClearIcon = iconSizes.clear[size];

    if (!value) {
      return null;
    }

    return (
      <IconButton Icon={ClearIcon} size={size} theme="tertiary" onClick={this.onClear}>
        Clear search
      </IconButton>
    );
  }

  onFocus = () => this.setState({ isInputFocused: true });
  onBlur = () => this.setState({ isInputFocused: false });

  onChange = (e) => {
    const { disabled, onChange } = this.props;

    if (disabled) {
      return;
    }

    onChange(e);
  }

  onClear = (e) => {
    e.target.value = "";
    this.onChange(e);
  }
}
