import React, { PureComponent } from "react";


export default class Timer extends PureComponent {
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
          d="M10 27a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2c5.523 0 10-4.477 10-10S15.523 9 10 9 0 13.477 0 19s4.477 10 10 10z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M4 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zM11.535 15.707a1 1 0 0 1 1.414 1.414l-2.828 2.829a1 1 0 1 1-1.414-1.415l2.828-2.828z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
