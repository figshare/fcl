import React, { PureComponent } from "react";


export default class DoubleChevronUpMedium extends PureComponent {
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
          d="M.293 25.707a1 1 0 0 1 0-1.415l5.993-5.994a1.01 1.01 0 0 1 1.428 0l5.993 5.994a1 1 0 0 1-1.414 1.415L7 20.413l-5.293 5.294a1 1 0 0 1-1.414 0z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M.293 19.705a1 1 0 0 1 0-1.414l5.993-5.995a1.01 1.01 0 0 1 1.428 0l5.993 5.995a1 1 0 0 1-1.414 1.414L7 14.411l-5.293 5.294a1 1 0 0 1-1.414 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
