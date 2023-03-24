import React, { PureComponent } from "react";


export default class AngleLeft extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="12"
        {...this.props}
        focusable={false}
        viewBox="0 0 12 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m5.51 18 6.165-5.838a1.025 1.025 0 0 0 0-1.497L10.23 9.297a1.101 1.101 0 0 0-1.505 0l-8.4 7.954a1.025 1.025 0 0 0 0 1.498l8.4 7.954a1.101 1.101 0 0 0 1.505 0l1.444-1.368a1.025 1.025 0 0 0 0-1.497L5.509 18z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
