import classnames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";

import GenericButton from "../genericButton";

import styles from "./index.css";


const themes = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
  primaryAlt: styles.primaryAlt,
  secondaryAlt: styles.secondaryAlt,
};

export default class IconButton extends Component {
  static propTypes = {
    Icon: PropTypes.elementType.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.oneOf(Object.keys(themes)),
  }

  static defaultProps = {
    children: undefined,
    className: undefined,
    theme: "primary",
  }

  render() {
    const { children, Icon, className, theme, ...props } = this.props;

    return (
      <GenericButton
        {...props}
        className={classnames(styles.button, themes[theme], className)}
        tooltip={children}
      >
        <Icon className={styles.icon} />
      </GenericButton>
    );
  }
}
