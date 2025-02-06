/* eslint-disable react/prop-types */
import React from "react";


export class ErrorBoundary extends React.Component {
  static defaultProps = { fallback: <div>Some error occured</div> }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }


  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.props.callback?.(error, info.componentStack);
    // eslint-disable-next-line no-console
    console.log(`ErrorBoundary ${this.props.name ?? "Unknown"} reported:`, error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
