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
  tertiaryAlt: styles.tertiaryAlt,
  inverted: styles.inverted,
};

const sizes = {
  S: "small",
  M: "medium",
  L: "large",
};

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    Icon: PropTypes.elementType,
    className: PropTypes.string,
    iconPlacement: PropTypes.oneOf(["left", "right"]),
    size: PropTypes.oneOf(Object.keys(sizes)),
    theme: PropTypes.oneOf(Object.keys(themes)),
    tooltip: PropTypes.node,
  }

  static defaultProps = {
    Icon: null,
    className: undefined,
    iconPlacement: "left",
    size: "M",
    theme: "secondary",
    tooltip: null,
  }

  render() {
    const { children, className, Icon, iconPlacement, size, theme, tooltip, ...props } = this.props;

    return (
      <GenericButton
        {...props}
        className={classnames(styles.button, themes[theme], className)}
        data-icon-placement={Icon ? iconPlacement : undefined}
        data-size={sizes[size]}
        tooltip={tooltip}
      >
        <span aria-hidden={true} className={styles.iconContainer}>
          {this.renderIcon()}
        </span>
        {children}
      </GenericButton>
    );
  }

  renderIcon() {
    const { Icon } = this.props;
    if (!Icon) {
      return null;
    }

    return <Icon className={styles.icon} />;
  }
}
