import React, { PureComponent } from "react";


export default class InfoSmall extends PureComponent {
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
          d="M7 11a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm.875 10.5a.875.875 0 1 1-1.75 0v-4.375a.875.875 0 1 1 1.75 0V21.5zm-.86-6.11a.89.89 0 1 1 0-1.78.89.89 0 0 1 0 1.78z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
