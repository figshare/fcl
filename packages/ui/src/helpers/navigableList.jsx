import React, { Component } from "react";
import PropTypes from "prop-types";

import FocusNavigation from "./focusNavigation";
import FocusRedirect from "./focusRedirect";


export default class NavigableList extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    innerRef: PropTypes.func,
    isActive: PropTypes.bool,
    navigationType: PropTypes.oneOf(["horizontal", "vertical"]),
    querySelector: PropTypes.string,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMouseDown: PropTypes.func,
  }

  static defaultProps = {
    innerRef: undefined,
    isActive: true,
    navigationType: "vertical",
    querySelector: "* > *",
    onFocus: undefined,
    onKeyDown: undefined,
    onMouseDown: undefined,
  }

  render() {
    return (
      <FocusNavigation {...this.props}>
        {this.renderFocusNavigationContent}
      </FocusNavigation>
    );
  }

  renderFocusNavigationContent = ({ ref, ...props }) => (
    <FocusRedirect innerRef={ref} {...props}>
      {this.renderFocusRedirectContent}
    </FocusRedirect>
  );

  renderFocusRedirectContent = (augmentedProps) => this.props.children(augmentedProps);
}
