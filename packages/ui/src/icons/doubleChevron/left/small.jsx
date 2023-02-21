import React, { PureComponent } from "react";


export default class DoubleChevronLeftSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="12"
        {...this.props}
        focusable={false}
        viewBox="0 0 12 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M5.705 14.293a1 1 0 0 0-1.415 0L.296 18.286a1.01 1.01 0 0 0 0 1.428l3.994 3.993a1 1 0 0 0 1.415-1.414L2.41 19l3.294-3.293a1 1 0 0 0 0-1.414z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M11.707 14.293a1 1 0 0 0-1.415 0l-3.994 3.993a1.01 1.01 0 0 0 0 1.428l3.994 3.993a1 1 0 0 0 1.415-1.414L8.413 19l3.294-3.293a1 1 0 0 0 0-1.414z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
