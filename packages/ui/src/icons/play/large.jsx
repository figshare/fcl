import React, { PureComponent } from "react";


export default class PlayLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="20"
        {...this.props}
        focusable={false}
        viewBox="0 0 20 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M0 4.65v26.658c0 1.239 1.325 2.162 2.635 1.436 1.05-.58 15.19-11.884 16.653-13.302.954-.924.945-1.969 0-2.889C18.235 15.527 4.106 4.04 2.58 3.223 1.464 2.621 0 3.284 0 4.65z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
