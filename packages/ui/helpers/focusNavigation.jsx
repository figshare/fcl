import { Component } from "react";
import PropTypes from "prop-types";

import { getSelectableNeighbour } from "../helpers/utils/getSelectableNeighbour";


const navigationKeys = {
  general: [
    "Home",
    "End",
  ],
  horizontal: [
    "ArrowLeft",
    "ArrowRight",
  ],
  vertical: [
    "ArrowUp",
    "ArrowDown",
  ],
};

export default class FocusNavigation extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    innerRef: PropTypes.func,
    isActive: PropTypes.bool,
    navigationType: PropTypes.oneOf(["horizontal", "vertical"]),
    querySelector: PropTypes.string,
    onKeyDown: PropTypes.func,
  }

  static defaultProps = {
    innerRef: undefined,
    isActive: true,
    navigationType: "vertical",
    querySelector: "* > *",
    onKeyDown: undefined,
  }

  containerNode = null;
  navigationKeys = navigationKeys;

  render() {
    const {
      children,
      innerRef,
      isActive,
      navigationType,
      querySelector,
      onKeyDown,
      ...restProps
    } = this.props;

    return children({
      ...restProps,
      ref: this.setRef,
      onKeyDown: this.onKeyDown,
    });
  }

  setRef = (node) => {
    const { querySelector, innerRef } = this.props;
    if (!node || node === this.containerNode) {
      return;
    }

    const items = Array.from(node.querySelectorAll(querySelector));
    items.forEach((item) => item.tabIndex = -1);

    innerRef?.(node);
    this.containerNode = node;
  }

  onKeyDown = (event) => {
    const { isActive, navigationType, onKeyDown } = this.props;
    const { key, target } = event;

    if (!isActive) {
      onKeyDown?.(event);

      return;
    }

    const isRelevantKeyPress = (
      this.navigationKeys.general.includes(key) ||
      this.navigationKeys[navigationType].includes(key)
    );

    if (!isRelevantKeyPress) {
      onKeyDown?.(event);

      return;
    }

    switch (key) {
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        this.focusSelectableNeighbour(target, -1);
        break;

      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        this.focusSelectableNeighbour(target, 1);
        break;

      case "Home":
        this.focusSelectableNeighbour(null, 1);
        event.preventDefault();
        break;

      case "End":
        this.focusSelectableNeighbour(null, -1);
        event.preventDefault();
        break;

      default:
    }

    onKeyDown?.(event);
  }

  focusSelectableNeighbour(currentNode, offset) {
    const { querySelector } = this.props;
    const { containerNode } = this;
    const node = getSelectableNeighbour({ querySelector, containerNode, currentNode, offset });

    if (!node) {
      return;
    }

    node.tabIndex = 0;
    node.focus?.();
    setTimeout(() => node.tabIndex = -1, 0);
  }
}
