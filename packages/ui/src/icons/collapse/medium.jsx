import React, { PureComponent } from "react";


export default class CollapseMedium extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="16"
        {...this.props}
        focusable={false}
        viewBox="0 0 16 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M15.581 10.814a1 1 0 0 0-1.162-1.628L8 13.773 1.581 9.186A1 1 0 1 0 .42 10.814l6.994 4.998c.351.25.823.25 1.174 0l6.994-4.998zM15.581 25.185a1 1 0 0 1-1.162 1.628L8 22.227l-6.419 4.586A1 1 0 1 1 .42 25.185l6.994-4.997a1.01 1.01 0 0 1 1.174 0l6.994 4.997z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
