import React, { useCallback } from "react";
import classnames from "classnames";
import { bool, func, string } from "prop-types";

import styles from "./index.css";


export default function Radio(
  {
    checked,
    className,
    disabled,
    error,
    id,
    label,
    name,
    onChange,
    value: inputValue,
    ...others
  }
) {
  const inputId = id || `${name}-${inputValue}`;
  const handler = useCallback((e) => onChange?.(e), [onChange]);

  return (
    <div className={classnames(styles.radio, { [styles.error]: error }, className)}>
      <input
        checked={checked}
        disabled={disabled}
        id={inputId}
        name={name}
        type="radio"
        value={inputValue}
        onChange={handler}
        {...others}
      />
      <label htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
}

Radio.propTypes = {
  /**
    * Boolean value to determine if the radio button is checked.
  */
  checked: bool,
  /**
    * Optional class name to append to the input container.
  */
  className: string,
  /**
    * Disables the button.
  */
  disabled: bool,
  /**
    * Mark the input as being in an error state, visually.
  */
  error: bool,
  /**
   * Optional id for input.
   */
  id: string,
  /**
    * Label text for the button.
  */
  label: string,
  /**
   * The name of the input
  */
  name: string,
  /**
    * Value of radio button.
  */
  value: string,
  /**
    * Callback called when the button value changes.
  */
  onChange: func,
};

Radio.defaultProps = {
  checked: false,
  className: undefined,
  disabled: false,
  error: false,
  id: undefined,
  label: undefined,
  name: undefined,
  value: null,
  onChange: undefined,
};
