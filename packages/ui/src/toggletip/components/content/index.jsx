import classnames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import FocusTrap from "@figshare/ui/helpers/focusTrap";
import { Content as PopupContent } from "@figshare/ui/popup";
import { GenericButton } from "@figshare/ui/button";
import Cancel from "@figshare/ui/icons/cancel/small";

import styles from "./index.css";


const themes = {
  "primary": styles.primary,
  "secondary": styles.secondary,
};

export default class Content extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    arrowClassName: PropTypes.string,
    className: PropTypes.string,
    contentId: PropTypes.string,
    innerRef: PropTypes.func,
    isVisible: PropTypes.bool,
    offset: PropTypes.number,
    placement: PropTypes.oneOf([
      "bottom", "bottom-start", "bottom-end",
      "top", "top-start", "top-end",
      "right", "right-start", "right-end",
      "left", "left-start", "left-end",
    ]),
    popperModifiers: PropTypes.array,
    renderCloseButton: PropTypes.func,
    renderInPortal: PropTypes.bool,
    theme: PropTypes.oneOf(["primary", "secondary"]),
    triggerId: PropTypes.string,
    onKeyDown: PropTypes.func,
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
