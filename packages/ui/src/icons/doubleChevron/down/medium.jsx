import React, { PureComponent } from "react";


export default class DoubleChevronDownMedium extends PureComponent {
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
          d="M13.707 12.293a1 1 0 0 1 0 1.415l-5.993 5.994a1.01 1.01 0 0 1-1.428 0L.293 13.708a1 1 0 0 1 1.414-1.415L7 17.587l5.293-5.294a1 1 0 0 1 1.414 0z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M13.707 18.295a1 1 0 0 1 0 1.414l-5.993 5.995a1.01 1.01 0 0 1-1.428 0L.293 19.71a1 1 0 0 1 1.414-1.414L7 23.589l5.293-5.294a1 1 0 0 1 1.414 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
