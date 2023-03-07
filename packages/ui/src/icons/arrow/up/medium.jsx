import React, { PureComponent } from "react";


export default class ArrowUpMedium extends PureComponent {
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
          d="m9 16.07 2.16 2.134c.401.396 1.05.396 1.451 0l1.088-1.075c.401-.395.401-1.037 0-1.433l-5.974-5.9a1.035 1.035 0 0 0-1.45 0L.3 15.697c-.4.396-.4 1.038 0 1.433l1.089 1.075c.4.396 1.05.396 1.45 0L5 16.07V26.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V16.07z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
