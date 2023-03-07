import React, { PureComponent } from "react";


export default class DoubleChevronLeftMedium extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="14"
        {...this.props}
        focusable={false}
        viewBox="0 0 14 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M13.707 25.707a1 1 0 0 1-1.415 0l-5.994-5.993a1.01 1.01 0 0 1 0-1.428l5.994-5.993a1 1 0 0 1 1.415 1.414L8.413 19l5.294 5.293a1 1 0 0 1 0 1.414z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M7.705 25.707a1 1 0 0 1-1.414 0L.296 19.714a1.01 1.01 0 0 1 0-1.428l5.995-5.993a1 1 0 0 1 1.414 1.414L2.411 19l5.294 5.293a1 1 0 0 1 0 1.414z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
