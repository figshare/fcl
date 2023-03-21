import PropTypes from "prop-types";
import React, { Component } from "react";

import isFunction from "../../helpers/utils/isFunction";
import withConsumer from "../../helpers/withConsumer";
import withRef from "../../helpers/withRef";
import { withA11y } from "../../a11y/context";

import Context from "./context";
import { computeDynamicDefault } from "./helpers";


class Reference extends Component {
  static propTypes = {
    a11yContext: PropTypes.object.isRequired,
    forAttributes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    linkingContext: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    component: PropTypes.any,
    forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    id: PropTypes.string,
    identifierKey: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    component: undefined,
    forwardedRef: undefined,
    id: undefined,
    identifierKey: undefined,
  }

  state = {
    id: undefined,
    identifierKey: undefined,
  }

  static getDerivedStateFromProps(props, state) {
    const { a11yContext, linkingContext } = props;

    if (!linkingContext) {
      throw new Error("LinkingProvider data not found, please ensure you have a provider");
    }

    const changes = {
      ...computeDynamicDefault(props, state, "id", a11yContext.uid.generate),
      ...computeDynamicDefault(props, state, "identifierKey", linkingContext.defaultIdentifier),
    };

    if (!Object.keys(changes).length) {
      return null;
    }

    return changes;
  }

  componentDidMount() {
    const { linkingContext, forAttributes } = this.props;
    const { id, identifierKey } = this.state;

    linkingContext.add(identifierKey, forAttributes, id);
  }

  componentDidUpdate(prevProps, prevState) {
    const { linkingContext } = this.props;

    linkingContext.update(
      { id: prevState.id, identifier: prevState.identifierKey, attributes: prevProps.forAttributes },
      { id: this.state.id, identifier: this.state.identifierKey, attributes: this.props.forAttributes }
    );
  }

  componentWillUnmount() {
    const { linkingContext } = this.props;
    const { id, identifierKey } = this.state;

    linkingContext.remove(identifierKey, id);
  }

  render() {
    const {
      linkingContext, children, component: ObjectComponent, forwardedRef,
      // props that are not used and should not be forwarded
      a11yContext, id, identifierKey, forAttributes,
      ...otherProps
    } = this.props;
    const referenceProps = { id: this.state.id };

    if (isFunction(children)) {
      return children({ linking: linkingContext, referenceProps });
    }

    if (ObjectComponent) {
      return (
        <ObjectComponent
          ref={forwardedRef}
          {...otherProps}
          {...referenceProps}
        >
          {children}
        </ObjectComponent>
      );
    }

    throw new Error("You need to provide either functional children or the `component` prop");
  }
}


export default withRef(
  withA11y(
    withConsumer(Context.Consumer, "linkingContext")(Reference)
  )
);
