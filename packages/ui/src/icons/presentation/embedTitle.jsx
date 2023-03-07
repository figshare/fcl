import React, { PureComponent } from "react";


export default class EmbedTitle extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        height="120"
        preserveAspectRatio="xMidYMid meet"
        width="133"
        {...this.props}
        focusable={false}
        viewBox="0 0 133 120"
        xmlns="https://www.w3.org/2000/svg"
      >
        <rect fill="#DDD" height="86.667" rx="1" width="133" y="20" />
        <rect fill="#525252" height="13.333" rx=".5" width="133" />
        <rect fill="#DDD" height="6.667" rx=".5" width="133" y="113.333" />
      </svg>
    );
  }
}
