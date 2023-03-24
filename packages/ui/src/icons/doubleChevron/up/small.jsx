import React, { PureComponent } from "react";


export default class DoubleChevronUpSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="10"
        {...this.props}
        focusable={false}
        viewBox="0 0 10 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M9.707 18.705a1 1 0 0 0 0-1.415l-3.993-3.994a1.01 1.01 0 0 0-1.428 0L.293 17.29a1 1 0 0 0 1.414 1.415L5 15.41l3.293 3.294a1 1 0 0 0 1.414 0z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M9.707 24.707a1 1 0 0 0 0-1.415l-3.993-3.994a1.01 1.01 0 0 0-1.428 0L.293 23.292a1 1 0 0 0 1.414 1.415L5 21.413l3.293 3.294a1 1 0 0 0 1.414 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
