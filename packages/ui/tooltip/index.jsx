import PropTypes from "prop-types";
import React, { Component } from "react";
import { Manager as PopperManager } from "react-popper";

import uncontrollable from "../helpers/uncontrollable";
import { LinkingProvider } from "../a11y/linking";
import { Provider } from "..//popup/context";


export { Content, Trigger } from "../popup";


const HIDE_DELAY = 500;

export class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    hideDelay: PropTypes.number,
    isVisible: PropTypes.bool,
    onToggle: PropTypes.func,
  }

  static defaultProps = {
    hideDelay: HIDE_DELAY,
    onToggle: () => undefined,
    isVisible: undefined,
  }

  constructor(...args) {
    super(...args);

    this.state = {
      timeoutId: 0,
      context: {
        contentRef: this.setContentRef,
        triggerRef: this.setTriggerRef,
        events: {
          onBlur: this.onHide,
          onFocus: this.onShow,
          onMouseOver: this.onShow,
          onMouseOut: this.onHide,
        },
        ariaRole: "tooltip",
        ariaAttributes: "aria-describedby",
        onClose: this.onClose,
        addEventsOnContent: true,
        isVisible: false,
      },
      tooltipDelay: 500,
    };
  }

  static getDerivedStateFromProps({ isVisible }, prevState) {
    return { context: { ...prevState.context, isVisible } };
  }

  componentWillUnmount() {
    clearTimeout(this.tooltipTimeoutId);
  }

  render() {
    return (
      <Provider value={this.state.context}>
        <PopperManager>
          <LinkingProvider>
            {this.props.children}
          </LinkingProvider>
        </PopperManager>
      </Provider>
    );
  }

  setContentRef = (node) => this.setState((state) => {
    return { context: { ...state.context, contentNode: node } };
  });

  setTriggerRef = (node) => this.setState((state) => {
    return { context: { ...state.context, triggerNode: node } };
  });

  onToggle = (event, _visible) => {
    this.props.onToggle(event, { isVisible: _visible });
  }

  onShow = (e) => {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
      this.setState({ timeoutId: 0 });
    }

    this.tooltipTimeoutId = setTimeout(() => {
      this.onToggle(e, true);
    }, this.state.tooltipDelay);
  }

  onHide = (e) => {
    clearTimeout(this.tooltipTimeoutId);
    const timeoutId = setTimeout(() => {
      this.onToggle(e, false);
    }, this.props.hideDelay);

    this.setState({ timeoutId });
  }

  onClose = (e) => {
    this.onToggle(e, false);
  }
}

export const UncontrolledTooltip = uncontrollable(
  Tooltip,
  { isVisible: ["onToggle", (_, __, e) => e.isVisible] }
);
