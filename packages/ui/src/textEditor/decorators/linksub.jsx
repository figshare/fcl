import React, { Component } from "react";
import PropTypes from "prop-types";


const linkStyle = { color: "#A60845" };

export default class LinkSub extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    contentState: PropTypes.object.isRequired,
    entityKey: PropTypes.string.isRequired,
  }

  linkNode = null;

  render() {
    const { contentState, entityKey, children } = this.props;
    const { url } = contentState.getEntity(entityKey).getData();

    if (!url) {
      return null;

    }

    return (
      <a
        ref={this.setLinkRef}
        href={url}
        rel="noreferrer"
        style={linkStyle}
        target="_blank"
      >
        <sub>
          {children}
        </sub>
      </a>
    );
  }

  setLinkRef = (node) => this.linkNode = node;
}
