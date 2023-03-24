import classnames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Popper } from "react-popper";

import PortalPopper from "./portalPopper";
import styles from "./index.css";


export default class Content extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    contentId: PropTypes.string.isRequired,
    triggerId: PropTypes.string.isRequired,
    arrowClassName: PropTypes.string,
    className: PropTypes.string,
    innerRef: PropTypes.func,
    offset: PropTypes.number,
    placement: PropTypes.oneOf([
      "bottom", "bottom-start", "bottom-end",
      "top", "top-start", "top-end",
      "right", "right-start", "right-end",
      "left", "left-start", "left-end",
    ]),
    popperModifiers: PropTypes.object,
    renderInPortal: PropTypes.bool,
  }

  static defaultProps = {
    arrowClassName: undefined,
    className: undefined,
    innerRef: undefined,
    offset: 12,
    placement: "bottom",
    popperModifiers: undefined,
    renderInPortal: false,
  }

  render() {
    const { renderInPortal } = this.props;

    if (!renderInPortal) {
      return this.renderPopper();
    }

    return (
      <PortalPopper>
        {this.renderPopper()}
      </PortalPopper>
    );
  }

  renderPopper = () => {
    const {
      innerRef,
      offset,
      placement,
      popperModifiers,
      triggerId,
    } = this.props;

    const triggerNode = document.getElementById(triggerId);

    const popperOffset = {
      offset: {
        enabled: true,
        offset: `0, ${offset}`,
      },
    };
    const modifiers = popperModifiers ? { ...popperModifiers, ...popperOffset } : popperOffset;

    return (
      <Popper
        innerRef={innerRef}
        modifiers={modifiers}
        placement={placement}
        referenceElement={triggerNode}
      >
        {this.renderContent}
      </Popper>
    );
  }

  renderContent = (popperProps) => {
    const {
      ref: popperRef,
      style: popperStyle,
      placement: popperPlacement,
      arrowProps: {
        ref: arrowRef,
        style: arrowStyle,
      },
    } = popperProps;

    const {
      arrowClassName,
      children,
      className,
      contentId,
      innerRef,
      offset,
      placement,
      popperModifiers,
      renderInPortal,
      triggerId,
      ...restProps
    } = this.props;

    const containerClassNames = classnames(
      styles.popper,
      className,
    );
    const arrowClassNames = classnames(
      styles.arrow,
      arrowClassName,
    );

    return (
      <div
        {...restProps}
        ref={popperRef}
        className={containerClassNames}
        id={contentId}
        style={popperStyle}
      >
        {children}
        <div
          ref={arrowRef}
          className={arrowClassNames}
          data-placement={popperPlacement}
          role="presentation"
          style={arrowStyle}
        />
      </div>
    );
  }
}
