import React, { Component } from "react";
import PropTypes from "prop-types";

import withRef from "../../helpers/withRef";

import LinkingObject from "./object";
import LinkingReference from "./reference";


const getDisplayName = (WrappedComponent) => {
  if (typeof WrappedComponent === "string") {
    return WrappedComponent;
  }

  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};


export const withProps = (ParentComponent, staticProps, displayName) => {
  class Wrapper extends Component {
    static propTypes = { forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]) };

    static defaultProps = { forwardedRef: undefined };

    render() {
      const { forwardedRef, ...props } = this.props;

      return (
        <ParentComponent
          ref={forwardedRef}
          {...props}
          {...staticProps}
        />
      );
    }
  }


  Wrapper.displayName = `${displayName}(${getDisplayName(ParentComponent)})`;

  return withRef(Wrapper);
};


export const withLinkingReference = (component, forAttributes) =>
  withProps(LinkingReference, { component, forAttributes }, "withLinkingReference");


export const withLinkingObject = (component, attributes) =>
  withProps(LinkingObject, { component, attributes }, "withLinkingObject");
