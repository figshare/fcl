import React, { PureComponent } from "react";


export default class DoubleChevronRightMedium extends PureComponent {
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
          d="M.293 12.293a1 1 0 0 1 1.415 0l5.994 5.993a1.01 1.01 0 0 1 0 1.428l-5.994 5.993a1 1 0 0 1-1.415-1.414L5.587 19 .293 13.707a1 1 0 0 1 0-1.414z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M6.295 12.293a1 1 0 0 1 1.414 0l5.995 5.993a1.01 1.01 0 0 1 0 1.428L7.71 25.707a1 1 0 0 1-1.414-1.414L11.589 19l-5.294-5.293a1 1 0 0 1 0-1.414z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
