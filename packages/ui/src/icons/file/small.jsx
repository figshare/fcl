import React, { PureComponent } from "react";


export default class FileSmall extends PureComponent {
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
          d="M0.0547442 27L0 9H8.79618L12 12V27H0.0547442ZM11 13.5H7.5V10H1.00006V26H11.0001L11 13.5Z"
          fill="#8D8D8D"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
