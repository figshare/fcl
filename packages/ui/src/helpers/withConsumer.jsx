import React, { Component } from "react";


export default (Consumer, name = "contextProps") => (Child) => {
  if (!Consumer || !Child) {
    throw new Error("No Consumer or Child provided to `withConsumer` helper");
  }

  return class WithConsumer extends Component {
    render() {
      return <Consumer>{this.renderChild}</Consumer>;
    }

    renderChild = (context) => {
      const contextProps = { [name]: context };

      return <Child {...this.props} {...contextProps} />;
    }
  };
};
