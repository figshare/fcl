import PropTypes from "prop-types";
import { Component } from "react";


export default class Popup extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    contentId: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    triggerId: PropTypes.string.isRequired,
    onAfterClose: PropTypes.func,
    onAfterOpen: PropTypes.func,
  }

  static defaultProps = {
    onAfterClose: undefined,
    onAfterOpen: undefined,
  }

  componentDidUpdate(prevProps) {
    const { isVisible: wasVisible } = prevProps;
    const {
      contentId,
      triggerId,
      isVisible,
      onAfterOpen,
      onAfterClose,
    } = this.props;

    if (isVisible === wasVisible) {
      return;
    }

    const didOpen = isVisible && !wasVisible;

    if (didOpen) {
      const contentNode = document.getElementById(contentId);
      onAfterOpen(contentNode);

      return;
    }

    const triggerNode = document.getElementById(triggerId);
    onAfterClose(triggerNode);
  }

  render() {
    return this.props.children;
  }
}

export { default as Trigger } from "./components/trigger";
export { default as Content } from "./components/content";
