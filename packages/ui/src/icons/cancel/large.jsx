import React, { PureComponent } from "react";


export default class CancelLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="18"
        {...this.props}
        focusable={false}
        viewBox="0 0 18 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M2.308 9.396a1.352 1.352 0 1 0-1.912 1.912L7.088 18 .397 24.692a1.352 1.352 0 0 0 1.912 1.912L9 19.913l6.691 6.691a1.352 1.352 0 1 0 1.912-1.912L10.912 18l6.692-6.692a1.352 1.352 0 0 0-1.912-1.912L9 16.088 2.308 9.396z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
