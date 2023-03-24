import { Component } from "react";
import PropTypes from "prop-types";


const generalQuerySelector = "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])";

export default class FocusRedirect extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    innerRef: PropTypes.func,
    isActive: PropTypes.bool,
    querySelector: PropTypes.string,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMouseDown: PropTypes.func,
  }

  static defaultProps = {
    innerRef: undefined,
    isActive: true,
    querySelector: generalQuerySelector,
    onFocus: undefined,
    onKeyDown: undefined,
    onMouseDown: undefined,
  }

  containerNode = null;

  render() {
    const {
      innerRef,
      isActive,
      children,
      querySelector,
      onFocus,
      onKeyDown,
      onMouseDown,
      ...restProps
    } = this.props;

    const applyTabIndex = (isActive && children) ? 0 : -1;

    return children({
      ...restProps,
      ref: this.setRef,
      tabIndex: applyTabIndex,
      onFocus: this.onFocus,
      onKeyDown: this.onKeyDown,
      onMouseDown: this.onMouseDown,
    });
  }

  setRef = (node) => {
    if (!node || node === this.containerNode) {
      return;
    }

    this.props.innerRef?.(node);
    this.containerNode = node;
  }

  onKeyDown = (e) => {
    if (e.key === "Tab" && e.shiftKey) {
      this.containerNode.tabIndex = -1;
      setTimeout(this._addElementNodeTabIndex, 0);
    }

    this.props.onKeyDown?.(e);
  }

  onMouseDown = (e) => {
    if (e.target === this.containerNode) {
      e.preventDefault();
    }

    this.props.onMouseDown?.(e);
  }

  onFocus = (e) => {
    const { containerNode } = this;
    const { querySelector, onFocus } = this.props;

    if (e.target !== containerNode) {
      return;
    }

    e.preventDefault();

    const targetChild = containerNode.querySelector(querySelector);
    targetChild?.focus?.();

    onFocus?.(e);
  }

  _addElementNodeTabIndex = () => this.containerNode.tabIndex = 0;
}
