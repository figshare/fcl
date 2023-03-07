import React, { PureComponent } from "react";


export default class LockLarge extends PureComponent {
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
          d="M2 13h1v-2a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2zm10.5-2v2h-7v-2a3.5 3.5 0 1 1 7 0zM9 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
