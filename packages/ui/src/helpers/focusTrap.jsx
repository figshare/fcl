import { Component } from "react";
import PropTypes from "prop-types";

import { getSelectableNeighbour } from "../helpers/utils/getSelectableNeighbour";


export function visibilityFilter(node) {
  const computed = window?.getComputedStyle?.(node);

  if (computed?.visibility === "hidden") {
    return false;
  }

  if (computed?.display === "none") {
    return false;
  }

  return true;
}


export default class FocusTrap extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    focusIn: PropTypes.bool,
    innerRef: PropTypes.func,
    isActive: PropTypes.bool,
    returnFocus: PropTypes.bool,
    onKeyDown: PropTypes.func,
  }

  static defaultProps = {
    innerRef: undefined,
    isActive: true,
    focusIn: false,
    returnFocus: false,
    onKeyDown: undefined,
  }

  containerNode = null;


  componentDidMount() {
    this.referenceNode = document.activeElement;

    if (this.props.focusIn) {
      this.focusSelectableNeighbour(null, 0, (node) => node.getAttribute("tabindex") !== "-1");
    }

    this.containerNode?.addEventListener?.("keydown", this.onKeyDown);
  }


  componentWillUnmount() {
    if (this.props.returnFocus) {
      const reference = this.referenceNode;
      setTimeout(() => {
        /**
         * Attempt focus under a delay, to make sure the reference is visible.
         * If the element that contains it was hidden while the focus trap unmounts.
         */
        reference?.focus?.();
      }, 100);
    }

    this.containerNode?.removeEventListener?.("keydown", this.onKeyDown);
  }

  render() {
    const {
      children,
      innerRef,
      isActive,
      onKeyDown,
      focusIn,
      returnFocus,
      ...restProps
    } = this.props;

    return children({
      ...restProps,
      ref: this.setRef,
      onKeyDown: this.onKeyDown,
    });
  }

  setRef = (node) => {
    if (!node || node === this.containerNode) {
      return;
    }

    this.props.innerRef?.(node);
    this.containerNode = node;
  }

  onKeyDown = (event) => {
    const { isActive, onKeyDown } = this.props;
    const { key, shiftKey, target } = event;

    if (!isActive || key !== "Tab") {
      onKeyDown?.(event);

      return;
    }

    event.preventDefault();

    if (shiftKey) {
      this.focusSelectableNeighbour(target, -1, visibilityFilter);
    } else {
      this.focusSelectableNeighbour(target, 1, visibilityFilter);
    }

    onKeyDown?.(event);
  }

  focusSelectableNeighbour(currentNode, offset, filter) {
    const { containerNode } = this;
    const node = getSelectableNeighbour({ containerNode, currentNode, offset, filter });

    node?.focus?.();
  }
}
