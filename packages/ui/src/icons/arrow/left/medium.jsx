import React, { PureComponent } from "react";


export default class ArrowLeftMedium extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="18"
        {...this.props}
        focusable={false}
        viewBox="0 0 18 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m6.57 20.5 2.134 2.16c.396.401.396 1.05 0 1.451L7.629 25.2c-.395.401-1.037.401-1.432 0l-5.9-5.974a1.035 1.035 0 0 1 0-1.45l5.9-5.974c.395-.401 1.037-.401 1.432 0l1.075 1.088c.396.4.396 1.05 0 1.45L6.57 16.5H17a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.57z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
