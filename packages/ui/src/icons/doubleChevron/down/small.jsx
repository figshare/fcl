import React, { PureComponent } from "react";


export default class DoubleChevronDownSmall extends PureComponent {
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
          d="M9.707 19.295a1 1 0 0 1 0 1.415l-3.993 3.994a1.01 1.01 0 0 1-1.428 0L.293 20.71a1 1 0 0 1 1.414-1.415L5 22.59l3.293-3.294a1 1 0 0 1 1.414 0z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M9.707 13.293a1 1 0 0 1 0 1.415l-3.993 3.994a1.01 1.01 0 0 1-1.428 0L.293 14.708a1 1 0 0 1 1.414-1.415L5 16.587l3.293-3.294a1 1 0 0 1 1.414 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
