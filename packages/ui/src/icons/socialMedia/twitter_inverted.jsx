import React, { PureComponent } from "react";


export default class TwitterInverted extends PureComponent {
  static name = "icons/TwitterInverted";

  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        preserveAspectRatio="xMidYMid meet"
        {...this.props}
        data-component={TwitterInverted.name}
        focusable={false}
        viewBox="0 0 20 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M20 1.932c-.748.31-1.535.541-2.362.619a3.978 3.978 0 0 0 1.81-2.242 7.496 7.496 0 0 1-2.598.966A4.167 4.167 0 0 0 13.858 0c-2.283 0-4.094 1.816-4.094 4.02 0 .309.04.618.118.927C6.457 4.83 3.425 3.207 1.378.773a3.854 3.854 0 0 0-.551 2.01c0 1.39.708 2.628 1.81 3.362-.669-.039-1.298-.193-1.85-.502v.038c0 1.933 1.418 3.594 3.307 3.942-.354.077-.708.155-1.063.155-.275 0-.511-.039-.787-.078.512 1.585 2.047 2.783 3.819 2.783a8.382 8.382 0 0 1-5.079 1.74c-.315 0-.669 0-.984-.04C1.811 15.344 3.976 16 6.3 16c7.558 0 11.653-6.145 11.653-11.44v-.502C18.74 3.44 19.449 2.744 20 1.932z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
