import PropTypes from "prop-types";
import React, { Component, createContext } from "react";

import withConsumer from "../../helpers/withConsumer";

import uidGenerator from "./uidGenerator";


const a11yContextCreator = () => {
  return { uid: uidGenerator() };
};

const A11yContext = createContext(a11yContextCreator());

export class Provider extends Component {
  static propTypes = { children: PropTypes.node }

  static defaultProps = { children: null }

  a11yContext = a11yContextCreator()

  render() {
    return (
      <A11yContext.Provider value={ { ...this.a11yContext } }>
        {this.props.children}
      </A11yContext.Provider>
    );
  }
}

export const { Consumer } = A11yContext;

export const withA11y = withConsumer(Consumer, "a11yContext");
