import PropTypes from "prop-types";
import React, { Component } from "react";
import isFunction from "@figshare/ui/helpers/utils/isFunction";

import withRef from "../../helpers/withRef";
import withConsumer from "../../helpers/withConsumer";

import Context from "./context";
import { computeDynamicDefault } from "./helpers";


class LinkingObject extends Component {
  static propTypes = {
    attributes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    linkingContext: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    component: PropTypes.any,
    forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    identifierKey: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    identifierKey: undefined,
    component: undefined,
    forwardedRef: undefined,
  }

  state = { identifierKey: undefined }

  static getDerivedStateFromProps(props, state) {
    const { linkingContext } = props;

    if (!linkingContext) {
      throw new Error("LinkingProvider data not found, please ensure you have a provider");
    }

    return computeDynamicDefault(props, state, "identifierKey", linkingContext.defaultIdentifier);
  }

  render() {
    const {
      identifierKey, attributes, linkingContext,
      component: ObjectComponent, forwardedRef, children,
      ...otherProps
    } = this.props;
    const objectProps = linkingContext.getPropsForAttributes(this.state.identifierKey, attributes);

    if (isFunction(children)) {
      return children({ linking: linkingContext, objectProps });
    }

    if (ObjectComponent) {
      return (<ObjectComponent ref={forwardedRef} {...otherProps} {...objectProps}>{children}</ObjectComponent>);
    }

    throw new Error("You need to provide either functional children or the `component` prop");
  }
}


export default withRef(
  withConsumer(Context.Consumer, "linkingContext")(LinkingObject)
);
