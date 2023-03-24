import React, { PureComponent } from "react";


export default class ArrowRightMedium extends PureComponent {
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
          d="m11.43 16.5-2.134-2.16a1.035 1.035 0 0 1 0-1.451l1.075-1.088c.395-.401 1.037-.401 1.432 0l5.9 5.974c.396.4.396 1.05 0 1.45l-5.9 5.974c-.395.401-1.037.401-1.432 0l-1.075-1.088a1.035 1.035 0 0 1 0-1.45l2.133-2.16H1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10.43z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
