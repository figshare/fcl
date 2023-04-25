import classnames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Content as PopupContent } from "@figshare/fcl/popup";
import { GenericButton } from "@figshare/fcl/button";

import FocusTrap from "../../../helpers/focusTrap";
import Cancel from "../../../icons/cancel/small";

import styles from "./index.css";


const themes = {
  "primary": styles.primary,
  "secondary": styles.secondary,
};

export default class Content extends Component {
  static propTypes = {
    /**
      Tooltip contents.
     */
    children: PropTypes.any.isRequired,
    /**
      Optional class appended to the arrow node classList.
     */
    arrowClassName: PropTypes.string,
    /**
      Optional class appended to the content node classList.
     */
    className: PropTypes.string,
    /**
      Optional id string for the content element. Received from `Toggletip` context.
     */
    contentId: PropTypes.string,
    /**
      Provide this ref function if you want to receive a reference to the content node.
     */
    innerRef: PropTypes.func,
    /**
      Property to force if the Toggletip `Content` is visible. Will receive this from context as well,
      if rendered under a `Toggletip` component.
     */
    isVisible: PropTypes.bool,
    /**
      Offset value for the content node relative to the trigger.
     */
    offset: PropTypes.number,
    /**
      Preferred placement of the Toggletip content relative to the trigger node.
     */
    placement: PropTypes.oneOf([
      "bottom", "bottom-start", "bottom-end",
      "top", "top-start", "top-end",
      "right", "right-start", "right-end",
      "left", "left-start", "left-end",
    ]),
    /**
      Optional modifiers list to be passed to the Popper instance rendered by the content component.
     */
    popperModifiers: PropTypes.array,
    /**
      Optional render function for the `Close` button inside the tooltip.
     */
    renderCloseButton: PropTypes.func,
    /**
      Controls wether the content node should be rendered inside the Toggletip wrapper, or portaled to an external node.
     */
    renderInPortal: PropTypes.bool,
    /**
      Content style theme.
     */
    theme: PropTypes.oneOf(["primary", "secondary"]),
    /**
      Optional string id for the trigger element. Received from `Toggletip` context.
     */
    triggerId: PropTypes.string,
    /**
      Callback called when trigger is focused and a key is pressed.
      Used to handle `Escape` to toggle close the tooltip.
      Received from `Toggletip` context.
     */
    onKeyDown: PropTypes.func,
    /**
      Callback called when toggletip is toggled through the content component.
      Received from `Toggletip` context.
     */
    onToggle: PropTypes.func,
  }

  static defaultProps = {
    arrowClassName: undefined,
    className: undefined,
    contentId: undefined,
    innerRef: undefined,
    isVisible: undefined,
    offset: undefined,
    placement: undefined,
    popperModifiers: undefined,
    renderCloseButton: undefined,
    renderInPortal: false,
    theme: "primary",
    triggerId: undefined,
    onKeyDown: undefined,
    onToggle: undefined,
  }

  render() {
    const { isVisible, innerRef } = this.props;

    if (!isVisible) {
      return null;
    }

    return (
      <FocusTrap innerRef={innerRef} onKeyDown={this.onKeyDown} >
        {this.renderPopupContent}
      </FocusTrap>
    );
  }

  renderPopupContent = (focusTrapProps) => {
    const {
      ref: focusTrapRef,
      onKeyDown: focusTrapOnKeyDown,
    } = focusTrapProps;

    const {
      arrowClassName,
      children,
      className,
      innerRef,
      isVisible,
      popperModifiers,
      renderCloseButton,
      theme,
      onKeyDown,
      ...restProps
    } = this.props;

    const popperClassNames = classnames(styles.popper, themes[theme], className);
    const arrowClassNames = classnames(styles.arrow, arrowClassName);

    return (
      <PopupContent
        {...restProps}
        arrowClassName={arrowClassNames}
        className={popperClassNames}
        innerRef={focusTrapRef}
        role="dialog"
        onKeyDown={focusTrapOnKeyDown}
      >
        <div className={styles.content}>
          {children}
        </div>
        {this.renderCloseButton()}
      </PopupContent>
    );
  }

  renderCloseButton = () => {
    const { renderCloseButton, onToggle } = this.props;

    if (renderCloseButton) {
      return renderCloseButton(onToggle);
    }

    return (
      <GenericButton
        aria-label="Close"
        className={styles.closeButton}
        onClick={onToggle}
      >
        <Cancel className={styles.closeIcon} />
      </GenericButton>
    );
  }

  onKeyDown = (e) => {
    const { onToggle, onKeyDown } = this.props;

    if (e.key === "Escape") {
      e?.preventDefault?.();
      onToggle?.(e);
    }

    onKeyDown?.(e);
  }
}
