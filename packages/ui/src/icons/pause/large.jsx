import React, { PureComponent } from "react";


export default class PauseLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="20"
        {...this.props}
        focusable={false}
        viewBox="0 0 20 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1 3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h6.333a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1zm11.667 0a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6.333z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
