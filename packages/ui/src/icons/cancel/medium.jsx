import React, { PureComponent } from "react";


export default class CancelMedium extends PureComponent {
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
          d="M1.795 11.308a1.051 1.051 0 1 0-1.487 1.487L5.513 18 .309 23.205a1.052 1.052 0 0 0 1.487 1.487L7 19.488l5.204 5.204a1.051 1.051 0 1 0 1.487-1.487L8.487 18l5.205-5.205a1.051 1.051 0 1 0-1.487-1.487L7 16.513l-5.205-5.205z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
