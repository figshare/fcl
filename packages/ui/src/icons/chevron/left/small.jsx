import React, { PureComponent } from "react";


export default class ChevronLeftSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="6"
        {...this.props}
        focusable={false}
        viewBox="0 0 6 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M5.707 23.707c-.39.39-1.024.39-1.415 0L.296 19.714a1.01 1.01 0 0 1 0-1.428l3.996-3.993a1.001 1.001 0 0 1 1.415 1.414L2.412 19l3.295 3.293a1 1 0 0 1 0 1.414z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
