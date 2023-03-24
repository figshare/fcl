import React, { PureComponent } from "react";


export default class ShareSmall extends PureComponent {
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
          d="M15 14a3 3 0 1 0-2.947-2.438L4.939 15.71a3 3 0 1 0 0 4.578l7.114 4.15a3 3 0 1 0 1.008-1.727l-7.113-4.15a3.017 3.017 0 0 0 0-1.124l7.113-4.149c.523.444 1.2.711 1.939.711z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
