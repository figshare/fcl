import PropTypes from "prop-types";
import { Component } from "react";
import ReactDOM from "react-dom";


export default class RenderInPortal extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    portalNode: PropTypes.instanceOf(HTMLElement),
  }

  static defaultProps = { portalNode: undefined }

  constructor(...args) {
    super(...args);

    const { portalNode } = this.props;
    this.basePortal = portalNode || document.body;

    const portal = document.fullscreenElement || this.basePortal;
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
    const portal = hasEnteredFullscreen ? target : this.basePortal;
    this.setState({ portal });
  }
}
