import React, { PureComponent } from "react";


export default class ProjectSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="15"
        {...this.props}
        focusable={false}
        viewBox="0 0 15 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1.364 12C.61 12 0 12.597 0 13.333v9.334C0 23.403.61 24 1.364 24h12.272C14.39 24 15 23.403 15 22.667V15.11c0-.736-.61-1.333-1.364-1.333H6.591l-1.9-1.486A1.383 1.383 0 0 0 3.84 12H1.364z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
