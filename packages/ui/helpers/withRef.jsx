/* eslint "react/no-multi-comp": 0 */
import PropTypes from "prop-types";
import React, { Component, forwardRef } from "react";


export default function withRef(WrappedComponent) {
  class WithRef extends Component {
    static propTypes = { forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]) }

    static defaultProps = { forwardedRef: null }

    render() {
      if (!WrappedComponent) {
        return null;
      }

      const { forwardedRef, ...props } = this.props;

      return <WrappedComponent {...props} forwardedRef={forwardedRef} />;
    }
  }

  return forwardRef((props, ref) => <WithRef {...props} forwardedRef={ref} />);
}
