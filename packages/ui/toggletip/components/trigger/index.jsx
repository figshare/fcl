import PropTypes from "prop-types";
import React, { Component } from "react";
import { Trigger as PopupTrigger } from "@figshare/fcl/popup";
import { Button, IconButton, GenericButton } from "@figshare/fcl/button";


const mapping = {
  "button": Button,
  "genericButton": GenericButton,
  "iconButton": IconButton,
};

export default class Trigger extends Component {
  static propTypes = {
    /**
      Trigger contents.
     */
    children: PropTypes.any,
    /**
      Optional id string for the content element. Received from `Toggletip` context.
     */
    contentId: PropTypes.string,
    /**
      Component to use for the Trigger. Given as a string name from one of the supported options.
     */
    displayedAs: PropTypes.oneOf(["button", "genericButton", "iconButton"]),
    /**
      Provide this ref function if you want to receive a reference to the trigger node.
     */
    innerRef: PropTypes.func,
    /**
      Property to force if the Toggletip `Content` is visible. Will receive this from context as well,
      if rendered under a `Toggletip` component.
     */
    isVisible: PropTypes.bool,
    /**
      Optional string id for the trigger element. Received from `Toggletip` context.
     */
    triggerId: PropTypes.string,
    /**
      Callback called when trigger is clicked. Received from `Toggletip` context.
     */
    onClick: PropTypes.func,
    /**
      Callback called when trigger is focused and a key is pressed. Received from `Toggletip` context.
     */
    onKeyDown: PropTypes.func,
    /**
      Callback called when toggletip is toggled through the trigger. Received from `Toggletip` context.
     */
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

    e?.stopPropagation?.();

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
