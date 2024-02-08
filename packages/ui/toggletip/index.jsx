import PropTypes from "prop-types";
import React, { Component } from "react";
import { Manager as PopperManager } from "react-popper";

import { LinkingProvider } from "../a11y/linking";
import { Provider } from "../popup/context";
import uncontrollable from "../helpers/uncontrollable";
import uuid from "../helpers/utils/uuid";


export { Content, Trigger } from "../popup";


export class Toggletip extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    closeSelf: PropTypes.bool,
    isVisible: PropTypes.bool,
    onToggle: PropTypes.func,
  }

  static defaultProps = { onToggle: () => undefined, isVisible: undefined, closeSelf: false }

  constructor(...args) {
    super(...args);

    this.state = {
      timeoutId: 0,
      context: {
        contentRef: this.setContentRef,
        triggerRef: this.setTriggerRef,
        events: { onClick: this.onToggle },
        ariaRole: "alertdialog",
        ariaAttributes: ["aria-describedby", "aria-labelledby"],
        onClose: this.onToggle,
        addEventsOnContent: false,
        isVisible: false,
      },
    };
  }

  static getDerivedStateFromProps({ isVisible }, prevState) {
    return { context: { ...prevState.context, isVisible } };
  }

  toggletipId = uuid();

  componentDidMount() {
    if (this.props.closeSelf) {
      document.body.addEventListener("toggletip-opened", this.listener);
    }
  }

  componentDidUpdate(prepProps, prevState) {
    if (prevState.context.isVisible !== this.state.context.isVisible && this.state.context.isVisible === true) {
      const ev = new CustomEvent("toggletip-opened", { detail: { id: this.toggletipId } });
      document.body.dispatchEvent(ev);
    }
  }

  componentWillUnmount() {
    if (this.props.closeSelf) {
      document.body.removeEventListener("toggletip-opened", this.listener);
    }
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

  onToggle = (event) => {
    event?.stopPropagation?.();
    this.props.onToggle(event, { isVisible: !this.state.context.isVisible });
  }

  onClose = (e) => {
    this.onToggle(e);
  }

  listener = (event) => {
    const { id } = event.detail;

    if (id !== this.toggletipId) {
      this.props.onToggle(event, { isVisible: false });
    }
  };

}

export const UncontrolledToggletip = uncontrollable(
  Toggletip,
  { isVisible: ["onToggle", (_, __, e) => e.isVisible] }
);
