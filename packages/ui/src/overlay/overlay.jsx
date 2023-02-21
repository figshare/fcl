import classnames from "classnames";
import React, { Component, createContext } from "react";
import PropTypes from "prop-types";
import Cancel from "@figshare/ui/icons/cancel/large";

import { IconButton } from "../button";
import FocusTrap from "../helpers/focusTrap";
import RenderInPortal from "../helpers/renderInPortal";

import { OverlayStack } from "./overlayStack";
// eslint-disable-next-line css-modules/no-unused-class
import styles from "./overlay.css";


let OVERLAY_ID = 0;

export const OverlayContext = createContext({
  id: 0,
  variant: "modal",
  background: "primary",
  overlayBackground: "blackTransparent",
});


export default class Overlay extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.oneOf(["primary", "secondary", "warning", "error", "success"]),
    className: PropTypes.string,
    focusIn: PropTypes.bool,
    id: PropTypes.string,
    isVisible: PropTypes.bool,
    overlayBackground: PropTypes.oneOf(["black", "blackTransparent", "white", "whiteTransparent"]),
    portalNode: PropTypes.any,
    returnFocus: PropTypes.bool,
    status: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(["loading", "ready", "error"])]),
    trapFocus: PropTypes.bool,
    variant: PropTypes.oneOf(["modal", "formModal"]),
    onClose: PropTypes.func,
  };

  static defaultProps = {
    className: undefined,
    focusIn: true,
    id: undefined,
    isVisible: true,
    background: "primary",
    overlayBackground: "blackTransparent",
    portalNode: "#fecore-ui-overlays",
    variant: "modal",
    returnFocus: false,
    trapFocus: true,
    status: "ready",
    onClose: undefined,
  };

  // eslint-disable-next-line no-plusplus
  id = this.props.id ?? OVERLAY_ID++;
  bound = false;

  getSnapshotBeforeUpdate(prevProps) {
    const opened = this.props.isVisible && !prevProps.isVisible;

    if (opened && !this.bound) {
      OverlayStack.push({ id: this.id });
      this.bound = true;
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    const closed = !this.props.isVisible && prevProps.isVisible;

    if (closed && this.bound) {
      OverlayStack.pop(this.id);
      this.bound = false;
    }
  }

  componentWillUnmount() {
    OverlayStack.pop(this.id);
  }

  render() {
    const { isVisible } = this.props;

    if (!isVisible) {
      return null;
    }

    const { variant, background, overlayBackground, returnFocus, focusIn, status, trapFocus } = this.props;
    const overlayStyle = { zIndex: OverlayStack.getZIndex(this.id) };
    const context = {
      id: this.id,
      onClose: this.handleClose,
      variant,
      background,
      overlayBackground,
      status,
      returnFocus,
      focusIn,
    };
    const portalNode = this.getPortalNode();

    return (
      <RenderInPortal portalNode={portalNode}>
        <aside
          ref={this.setOverlayRef}
          className={classnames(styles.overlay, styles[overlayBackground])}
          role="presentation"
          style={overlayStyle}
          onClick={this.onClickOverlay}
          onKeyDown={this.onEscape}
        >
          <OverlayContext.Provider value={context}>
            <FocusTrap
              key={status}
              focusIn={focusIn}
              innerRef={this.setBoxRef}
              isActive={trapFocus}
              returnFocus={returnFocus}
            >
              {this.renderContent}
            </FocusTrap>
          </OverlayContext.Provider>
        </aside>
      </RenderInPortal>

    );
  }

  renderContent = (focusTrapProps) => {
    const { ref } = focusTrapProps;
    const { children, className, variant, background, onClose } = this.props;
    const aria = {
      "aria-labelledby": `dialog-${this.id}-title`,
      "aria-describedby": `dialog-${this.id}-description`,
    };

    return (
      <section
        ref={ref}
        className={classnames(styles.overlayBox, styles[background], styles[variant], className)}
        role="dialog"
        {...aria}
      >
        <IconButton
          Icon={Cancel}
          className={styles.closeButton}
          size="M" tabIndex={-1} theme="primary"
          onClick={onClose}
        >
          Close
        </IconButton>
        <>{children}</>
      </section>
    );
  };

  getPortalNode = () => {
    const { portalNode } = this.props;
    let nodeToUse = portalNode;

    if (typeof portalNode === "string") {
      nodeToUse = document.querySelector(portalNode);
    }

    if (nodeToUse instanceof HTMLElement) {
      return nodeToUse;
    }

    return document.body;
  }

  setBoxRef = (node) => {
    this.boxRef = node;
  };

  setOverlayRef = (node) => {
    this.overlayRef = node;
  }

  onClickOverlay = (event) => {
    if (event.target === event.currentTarget) {
      this.handleClose(event);
    }
  }

  onEscape = (event) => {
    const isLast = OverlayStack.isLast(this.id);

    if (event.key === "Escape" && isLast) {
      if (event.defaultPrevented) {
        return;
      }

      this.handleClose(event);
    }
  };

  handleClose = (...args) => {
    const { onClose } = this.props;

    OverlayStack.pop(this.id);
    onClose(...args);
  }
}
