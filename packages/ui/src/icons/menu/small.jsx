import React, { PureComponent } from "react";


export default class MenuSmall extends PureComponent {
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
          d="M0 14a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1zM0 18a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1zM1 21a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H1z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
