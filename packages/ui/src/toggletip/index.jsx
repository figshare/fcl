import PropTypes from "prop-types";
import React, { Component, Children } from "react";
import Popup from "@figshare/ui/popup";
import uidGenerator from "@figshare/ui/a11y/context/uidGenerator";


const uid = uidGenerator();
const generalQuerySelector = "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])";

export default class Toggletip extends Component {
  static propTypes = {
    /**
      Toggletip manager inner contents. Should ideally contain a Trigger and Content component,
      to which certain props will be passed.
     */
    children: PropTypes.any.isRequired,
    /**
      Toggles the visibility of the tooltip `Content`.
     */
    isVisible: PropTypes.bool.isRequired,
    /**
      Function called when visibility state should change.
     */
    onToggle: PropTypes.func.isRequired,
    /**
      Optional id string for the tooltip contents.
     */
    contentId: PropTypes.string,
    /**
      Selector string for the content element we want to first move focus to when the ToggleTip is made visible.
     */
    querySelector: PropTypes.string,
    /**
      Optional id string for the tooltip trigger element.
     */
    triggerId: PropTypes.string,
    /**
      Callback called when the tooltip is hidden.
     */
    onAfterClose: PropTypes.func,
    /**
      Callback called when the tooltip is made visible.
     */
    onAfterOpen: PropTypes.func,
  }

  static defaultProps = {
    contentId: undefined,
    querySelector: generalQuerySelector,
    triggerId: undefined,
    onAfterClose: undefined,
    onAfterOpen: undefined,
  }

  constructor(...args) {
    super(...args);

    const { contentId, triggerId } = this.props;

    const uniqueID = uid.generate();
    this.contentId = contentId || `toggletip-content-${uniqueID}`;
    this.triggerId = triggerId || `toggletip-trigger-${uniqueID}`;
  }

  render() {
    const {
      children,
      contentId,
      isVisible,
      triggerId,
      onAfterClose,
      onAfterOpen,
      onToggle,
      ...restProps
    } = this.props;

    return (
      <Popup
        {...restProps}
        contentId={this.contentId}
        isVisible={isVisible}
        triggerId={this.triggerId}
        onAfterClose={this.onAfterClose}
        onAfterOpen={this.onAfterOpen}
      >
        {this.renderChildrenWithAddedProps()}
      </Popup>
    );
  }

  renderChildrenWithAddedProps = () => {
    const { children, isVisible, onToggle } = this.props;

    const addedProps = {
      isVisible,
      contentId: this.contentId,
      triggerId: this.triggerId,
      onToggle,
    };

    if (typeof children === "function") {
      return children(addedProps);
    }

    return Children.map(children, (c) => React.cloneElement(c, addedProps));
  }

  onAfterOpen = (contentNode) => {
    const { querySelector, onAfterOpen } = this.props;

    const firstFocusableElement = contentNode?.querySelector(querySelector);
    firstFocusableElement?.focus?.({ preventScroll: true });
    onAfterOpen?.(contentNode);
  }

  onAfterClose = (triggerNode) => {
    const { onAfterClose } = this.props;

    triggerNode?.focus?.();
    onAfterClose?.(triggerNode);
  }
}

export { default as Trigger } from "./components/trigger";
export { default as Content } from "./components/content";
export { default as UncontrolledToggletip } from "./uncontrolled";
