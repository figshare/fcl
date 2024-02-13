import PropTypes from "prop-types";
import React, { Component } from "react";
import { Manager as PopperManager } from "react-popper";

import { LinkingProvider } from "../a11y/linking";
import { Provider } from "../popup/context";
import uncontrollable from "../helpers/uncontrollable";


export { Content, Trigger } from "../popup";

let uuid = 0;

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

    uuid += 1;

    this.toggletipId = uuid;

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

  componentDidMount() {
    if (this.props.closeSelf) {
      try {
        document?.body?.addEventListener?.("toggletip-opened", this.listener);
      } catch (e) {
        // document not available
      }
    }
  }

  componentDidUpdate(prepProps, prevState) {
    if (prevState.context.isVisible !== this.state.context.isVisible && this.state.context.isVisible === true) {
      try {
        const ev = new CustomEvent("toggletip-opened", { detail: { id: this.toggletipId } });
        document?.body?.dispatchEvent?.(ev);
      } catch (e) {
        // dispatch not available
      }
    }
  }

  componentWillUnmount() {
    try {
      document?.body?.removeEventListener?.("toggletip-opened", this.listener);
    } catch (e) {
      // document not available
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
