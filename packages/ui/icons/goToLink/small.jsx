import React, { PureComponent } from "react";


export default class GoToLinkSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="8"
        {...this.props}
        focusable={false}
        viewBox="0 0 8 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M4 14.333c0-.184.15-.333.333-.333h3.2c.258 0 .467.209.467.467v3.2a.333.333 0 0 1-.667 0v-2.529l-3.097 3.098a.333.333 0 0 1-.472-.472l3.098-3.097H4.333A.333.333 0 0 1 4 14.333z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M.667 15.333A.667.667 0 0 0 0 16v5.333c0 .369.298.667.667.667H6a.667.667 0 0 0 .667-.667v-1.666a.333.333 0 1 0-.667 0v1.666H.667V16h1.666a.333.333 0 1 0 0-.667H.667z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
