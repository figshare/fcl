import React, { Component } from "react";
import PropTypes from "prop-types";

import FocusNavigation from "./focusNavigation";
import FocusRedirect from "./focusRedirect";


export default class NavigableList extends Component {
  static propTypes = {
    /**
      Render function for the navigable list contents.
      Will receive a `props` object and a `ref` to pass to a wrapping list node,
      which should render each focusable item.
     */
    children: PropTypes.func.isRequired,
    /**
      Optional ref to the list wrapper node.
     */
    innerRef: PropTypes.func,
    /**
      Set the list focus behavior as being activated or deactivated.
     */
    isActive: PropTypes.bool,
    /**
      Set the navigation behavior using arrow keys.
      Use "vertical" for `Arrow Up/Down` navigation through focusable elements.
      Use "horizontal" for `Arrow Left/Right` navigation through focusable elements.
     */
    navigationType: PropTypes.oneOf(["horizontal", "vertical"]),
    /**
      Focusable elements query selector.
      Provide this `selector` if you want to be more specific with how `focusable/navigate-able`
      should be queried and selected inside the list.
     */
    querySelector: PropTypes.string,
    /**
      Callback called when the list receives focus.
     */
    onFocus: PropTypes.func,
    /**
      Callback called when users press a key while focused within the list.
     */
    onKeyDown: PropTypes.func,
    /**
      Callback called when users hover over the list.
     */
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
