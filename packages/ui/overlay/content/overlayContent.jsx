import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./overlayContent.css";


export default class OverlayContent extends Component {
  static propTypes = {
    /**
      Main contents for an overlay.
     */
    children: PropTypes.node,
    /**
      Optional class to append to the content node.
     */
    className: PropTypes.string,
  }

  static defaultProps = {
    className: undefined,
    children: undefined,
  }

  render() {
    const { className, children } = this.props;

    return (
      <div className={classnames(styles.content, className)}>
        {children}
      </div>
    );
  }
}
