import PropTypes from "prop-types";
import React, { Component } from "react";
import serialize from "serialize-javascript";


export default class WindowInjection extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    globalName: PropTypes.string.isRequired,
    isJSON: PropTypes.bool,
  }

  static defaultProps = { isJSON: true }

  render() {
    const { globalName, data, isJSON } = this.props;
    if (!globalName || !data) {
      return null;
    }

    const safeValue = serialize(data, { isJSON });
    const dataInjection = `;(function() { window.${globalName} = ${safeValue}; }());`;

    return <script dangerouslySetInnerHTML={ { __html: dataInjection } } />;
  }
}
