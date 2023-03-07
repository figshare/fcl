import classnames from "classnames";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import BaseButton from "./base";
import styles from "./index.css";


export default class GenericButton extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    classNameTooltip: PropTypes.string,
    href: PropTypes.string,
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    tooltip: PropTypes.any,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    onFocus: PropTypes.func,
    onLongPress: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
  }

  static defaultProps = {
    className: undefined,
    classNameTooltip: undefined,
    href: undefined,
    innerRef: null,
    tooltip: undefined,
    onBlur: undefined,
    onClick: undefined,
    onContextMenu: undefined,
    onFocus: undefined,
    onLongPress: undefined,
    onMouseOut: undefined,
    onMouseOver: undefined,
  }

  state = {
    left: 0,
    top: 0,
    arrowLeft: 0,
    isBelow: false,
    isActive: false,
    isVisible: false,
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  render() {
    const { children, className, classNameTooltip, ...props } = this.props;

    return (
      <BaseButton
        {...props}
        className={classnames(styles.button, className)}
        innerRef={this.setButtonRef}
        onBlur={this.onBlur}
        onClick={this.onClick}
        onContextMenu={this.onContextMenu}
        onFocus={this.onFocus}
        onLongPress={this.onLongPress}
        onMouseOut={this.onMouseOut}
        onMouseOver={this.onMouseOver}
      >
        {children}
        {this.renderTooltip()}
      </BaseButton>
    );
  }

  renderTooltip() {
    const { tooltip, classNameTooltip } = this.props;
    if (!tooltip) {
      return null;
    }

    const { left, top, arrowLeft, isBelow, isActive, isVisible } = this.state;

    return (
      <span
        ref={this.setTooltipRef}
        aria-hidden={false}
        className={classnames(styles.tooltip, classNameTooltip)}
        data-tooltip-below={isBelow}
        data-tooltip-visible={isActive && isVisible}
        style={ {
          "--tooltipLeft": `${left}px`,
          "--tooltipTop": `${top}px`,
          "--tooltipArrowLeft": `${arrowLeft}px`,
        } }
      >
        {tooltip}
      </span>
    );
  }

  buttonNode = null;
  tooltipNode = null;

  setButtonRef = (node) => {
    const { innerRef } = this.props;
    this.buttonNode = node;

    if (!innerRef) {
      return;
    }

    if (typeof innerRef === "function") {
      innerRef(node);
    } else {
      innerRef.current = node;
    }
  }

  setTooltipRef = (node) => this.tooltipNode = node;

  onMouseOver = (event) => {
    this.showTooltip();
    this.props.onMouseOver?.(event);
  }

  onFocus = (event) => {
    this.showTooltip();
    this.props.onFocus?.(event);
  }

  onMouseOut = (event) => {
    this.hideTooltip();
    this.props.onMouseOut?.(event);
  }

  onBlur = (event) => {
    this.hideTooltip();
    this.props.onBlur?.(event);
  }

  onLongPress = () => {
    this.buttonNode?.focus();
    this.props.onLongPress?.();
  }

  onClick = (event) => {
    this.hideTooltip();
    this.props.onClick?.(event);
  }

  onContextMenu = (event) => {
    const { href, tooltip, onContextMenu } = this.props;
    if (!tooltip) {
      onContextMenu?.(event);

      return;
    }

    let hasTouchSupport = false;
    try {
      document.createEvent("TouchEvent");
      hasTouchSupport = true;
    } catch (e) {
      hasTouchSupport = false;
    }

    if (hasTouchSupport && href) {
      event.preventDefault();
    }

    onContextMenu?.(event);
  }

  showTooltip = () => {
    if (!this.props.tooltip) {
      return;
    }

    this.setState({ isActive: true }, this.computePosition);
    this.addListeners();
  }

  hideTooltip = () => {
    if (!this.props.tooltip) {
      return;
    }

    this.setState({ isActive: false });
    this.removeListeners();
  }

  computePosition = () => {
    const { x: buttonX, y: buttonY, width: buttonW, height: buttonH } = this.buttonNode.getBoundingClientRect();
    const { width: tooltipW, height: tooltipH } = this.tooltipNode.getBoundingClientRect();
    const { clientWidth: viewportW } = document.documentElement;

    const buttonCenterX = buttonX + (buttonW / 2);
    const tooltipCenterX = buttonCenterX - (tooltipW / 2);

    const isBelow = (buttonY - tooltipH) < 0;
    const top = isBelow ? buttonY + buttonH : buttonY - tooltipH;
    const left = Math.max(0, Math.min(tooltipCenterX, viewportW - tooltipW));
    const arrowLeft = Math.max(0, Math.min(buttonCenterX - left, tooltipW));
    const isVisible = buttonX + buttonW >= 0 && buttonX <= viewportW;

    this.setState({ left, top, arrowLeft, isBelow, isVisible });
  }

  addListeners = () => {
    document.addEventListener("resize", this.computePosition);
    document.addEventListener("scroll", this.computePosition, true);
  }

  removeListeners = () => {
    document.removeEventListener("resize", this.computePosition);
    document.removeEventListener("scroll", this.computePosition, true);
  }
}
