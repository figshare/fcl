import classnames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";

import style from "./overlayFooter.css";


export default class OverlayFooter extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static defaultProps = {
    children: undefined,
    className: undefined,
  }

  render() {
    const { children, className } = this.props;

    const count = React.Children.toArray(children).length;
    const classes = classnames(style.footer, { [style.singleControl]: count === 1 }, className);

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
