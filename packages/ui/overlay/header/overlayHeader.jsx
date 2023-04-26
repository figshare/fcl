import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { IconButton } from "../../button";
import Cancel from "../../icons/cancel/large";
import { OverlayContext } from "../overlay";

import styles from "./overlayHeader.css";


const CONFIRMATION_OVERLAYS = ["warning", "error", "success"];

export default class OverlayHeader extends Component {
  static contextType = OverlayContext;
  static propTypes = {
    /**
      Optional class name to append to the wrapping node.
     */
    className: PropTypes.string,
    /**
      Optional overlay description, to be displayed under the title.
     */
    description: PropTypes.node,
    /**
      Set this to `true` if you render `OverlayHeader` inside an `OverlayContent` component.
      It will remove top and side paddings, and appropriately fit as a child of that component.
      Useful in some cases where we want the OverlayHeader to scroll with the `Content`.
     */
    isPartOfContent: PropTypes.bool,
    /**
      Text or content for the Overlay title.
     */
    title: PropTypes.node,
    /**
     Triggered when the "Close" header button is clicked.
     If not provided, will be inherited from the `Overlay` component context.
    */
    onClose: PropTypes.func,
  }

  static defaultProps = {
    className: undefined,
    description: undefined,
    isPartOfContent: false,
    title: undefined,
    onClose: undefined,
  }

  render() {
    const { className, isPartOfContent, description, title, onClose, ...props } = this.props;
    const overlayId = this.context?.id ?? 0;
    const isForConfirmationOverlay = CONFIRMATION_OVERLAYS.includes(this.context?.background);
    const ariaTitle = `dialog-${overlayId}-title`;
    const ariaDescription = `dialog-${overlayId}-description`;

    return (
      <div
        {...props}
        className={classNames(styles.header, {
          [styles.partOfContent]: isPartOfContent,
          [styles.confirmation]: isForConfirmationOverlay,
        }, className)}
      >
        <div>
          <h1 className={styles.title} id={ariaTitle}>{title}</h1>
          {description && <p className={styles.description} id={ariaDescription}>{description}</p>}
        </div>
        <IconButton
          Icon={Cancel}
          className={styles.closeButton}
          size="M"
          tabIndex={-1}
          theme="primary"
          onClick={onClose ?? this.context.onClose}
        >
          Close
        </IconButton>
      </div>
    );
  }
}
