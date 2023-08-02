import PropTypes from "prop-types";
import React, { Component } from "react";

import { LinkingObject } from "../a11y/linking";
import withConsumer from "../helpers/withConsumer";

import { Consumer } from "./context";


class Trigger extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    tooltipContext: PropTypes.object.isRequired,
  }

  render() {
    const { ariaAttributes } = this.props.tooltipContext;

    return (
      <LinkingObject attributes={ariaAttributes} >
        {this.renderChildren}
      </LinkingObject>
    );
  }

  renderChildren = ({ objectProps }) => {
    const { children, tooltipContext } = this.props;
    const { events, triggerRef } = tooltipContext;
    const triggerProps = { ref: triggerRef, ...events };

    return children({ ...triggerProps, ...objectProps });
  }
}

export default withConsumer(Consumer, "tooltipContext")(Trigger);
