import PropTypes from "prop-types";
import { Component } from "react";
import ReactDOM from "react-dom";


export default class PortalPopper extends Component {
  static propTypes = { children: PropTypes.any.isRequired }

  constructor(...args) {
    super(...args);

    const portal = document.fullscreenElement || document.body;
    this.state = { portal };
  }

  componentDidMount() {
    document.addEventListener("fullscreenchange", this.onFullScreenChange);
  }

  componentWillUnmount() {
    document.removeEventListener("fullscreenchange", this.onFullScreenChange);
  }

  render() {
    const { children } = this.props;
    const { portal } = this.state;

    return ReactDOM.createPortal(children, portal);
  }

  onFullScreenChange = (event) => {
    const { target } = event;

    const hasEnteredFullscreen = !!document.fullscreenElement;
    const portal = hasEnteredFullscreen ? target : document.body;
    this.setState({ portal });
  }
}
