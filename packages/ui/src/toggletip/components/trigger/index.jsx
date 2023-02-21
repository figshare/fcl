import PropTypes from "prop-types";
import React, { Component } from "react";
import { Trigger as PopupTrigger } from "@figshare/ui/popup";
import { Button, IconButton, GenericButton } from "@figshare/ui/button";


const mapping = {
  "button": Button,
  "genericButton": GenericButton,
  "iconButton": IconButton,
};

export default class Trigger extends Component {
  static propTypes = {
    children: PropTypes.any,
    contentId: PropTypes.string,
    displayedAs: PropTypes.oneOf(["button", "genericButton", "iconButton"]),
    innerRef: PropTypes.func,
    isVisible: PropTypes.bool,
    triggerId: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onToggle: PropTypes.func,
  }

  static defaultProps = {
    children: undefined,
    contentId: undefined,
    displayedAs: "button",
    innerRef: undefined,
    isVisible: undefined,
    triggerId: undefined,
    onClick: undefined,
    onKeyDown: undefined,
    onToggle: undefined,
  }

  render() {
    const {
      displayedAs,
      children,
      contentId,
      isVisible,
      onToggle,
      ...restProps
    } = this.props;

    const ariaDescribedby = isVisible ? contentId : undefined;
    const Comp = mapping[displayedAs];

    return (
      <PopupTrigger
        {...restProps}
        aria-describedby={ariaDescribedby}
        aria-haspopup="dialog"
        displayedAs={Comp}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
      >
        {children}
      </PopupTrigger>
    );
  }

  onClick = (e) => {
    const { onClick, onToggle } = this.props;

    if (e.isDefaultPrevented()) {
      return;
    }

    onClick?.(e);
    onToggle?.(e);
  }

  onKeyDown = (e) => {
    const { isVisible, onKeyDown, onToggle } = this.props;

    if (e.key === "Escape" && isVisible) {
      e.preventDefault();
      onToggle?.(e);
    }

    onKeyDown?.(e);
  }
}
