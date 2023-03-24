import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import withRef from "./withRef";


const defaultHandlerModifier = (_internal, v) => v;

export default (WrappedComponent, options = {}) => {
  const controlledKeys = Object.keys(options);
  const controlledEntries = Object.entries(options);

  class Uncontrollable extends PureComponent {
    static propTypes = { forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]) }

    static defaultProps = { forwardedRef: null }

    static getDerivedStateFromProps(newProps, { __defaultProps: storedDefaultProps }) {
      const { state, __defaultProps } = controlledKeys.reduce((acc, propName) => {
        if (storedDefaultProps[propName] !== newProps[propName]) {
          acc.state[propName] = newProps[propName];
        }

        acc.__defaultProps[propName] = newProps[propName];

        return acc;
      }, { state: {}, __defaultProps: {} });

      if (!Object.keys(state).length) {
        return null;
      }

      return { ...state, __defaultProps };
    }

    constructor(...args) {
      super(...args);

      this.state = { __defaultProps: {} };
      this.handlers = controlledEntries.reduce((acc, [propName, handler]) => {
        let handlerName = handler;
        let modifier = undefined;

        if (Array.isArray(handler)) {
          [handlerName, modifier] = handler;
        }

        acc[handlerName] = this.handle(propName, handlerName, modifier);

        return acc;
      }, {});
    }

    render() {
      const { forwardedRef, ...props } = this.props;
      const { __defaultProps, ...state } = this.state;

      return <WrappedComponent ref={forwardedRef} {...props} {...state} {...this.handlers} />;
    }

    handle = (propName, handlerName, modifier = defaultHandlerModifier) => (...args) => {
      const { __defaultProps, ...state } = this.state;
      const { forwardedRef, ...props } = this.props;

      if (this.props[handlerName]) {
        this.props[handlerName](...args);
      }

      const value = modifier({ state, props }, ...args);
      this.setState({ [propName]: value });
    }
  }

  return withRef(Uncontrollable);
};
