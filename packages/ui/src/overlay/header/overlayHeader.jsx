import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { OverlayContext } from "../overlay";

import styles from "./overlayHeader.css";


const CONFIRMATION_OVERLAYS = ["warning", "error", "success"];

export default class OverlayHeader extends Component {
  static contextType = OverlayContext;
  static propTypes = {
    className: PropTypes.string,
    description: PropTypes.node,
    isPartOfContent: PropTypes.bool,
    title: PropTypes.node,
  }

  static defaultProps = {
    className: undefined,
    description: undefined,
    isPartOfContent: false,
    title: undefined,
  }

  render() {
    const { className, isPartOfContent, description, title } = this.props;
    const overlayId = this.context?.id ?? 0;
    const isForConfirmationOverlay = CONFIRMATION_OVERLAYS.includes(this.context?.background);
    const ariaTitle = `dialog-${overlayId}-title`;
    const ariaDescription = `dialog-${overlayId}-description`;

    return (
      <div
        className={classNames(styles.header, {
          [styles.partOfContent]: isPartOfContent,
          [styles.confirmation]: isForConfirmationOverlay,
        }, className)}
      >
        <h1 className={styles.title} id={ariaTitle}>{title}</h1>
        {description && <p className={styles.description} id={ariaDescription}>{description}</p>}
      </div>
    );
  }
}
