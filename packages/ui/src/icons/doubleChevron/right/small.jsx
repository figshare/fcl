import React, { PureComponent } from "react";


export default class DoubleChevronRightSmall extends PureComponent {
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
          d="M6.295 14.293a1 1 0 0 1 1.415 0l3.994 3.993a1.01 1.01 0 0 1 0 1.428L7.71 23.707a1 1 0 0 1-1.415-1.414L9.59 19l-3.294-3.293a1 1 0 0 1 0-1.414z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M.293 14.293a1 1 0 0 1 1.415 0l3.994 3.993a1.01 1.01 0 0 1 0 1.428l-3.994 3.993a1 1 0 0 1-1.415-1.414L3.587 19 .293 15.707a1 1 0 0 1 0-1.414z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
