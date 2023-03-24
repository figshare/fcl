import React, { PureComponent } from "react";


export default class MoreOptions extends PureComponent {
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
          d="M4 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM12 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
