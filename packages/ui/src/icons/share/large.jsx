import React, { PureComponent } from "react";


export default class ShareLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="27"
        {...this.props}
        focusable={false}
        viewBox="0 0 27 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M21.9 12.4a4.2 4.2 0 1 0-4.126-3.414l-9.959 5.81a4.2 4.2 0 1 0 0 6.41l9.959 5.808a4.2 4.2 0 1 0 1.411-2.418l-9.958-5.81a4.221 4.221 0 0 0 0-1.572l9.958-5.81c.733.621 1.68.996 2.715.996z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
