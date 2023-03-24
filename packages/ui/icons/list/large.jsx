import React, { PureComponent } from "react";


export default class ListLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="24"
        {...this.props}
        focusable={false}
        viewBox="0 0 24 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M4 13a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zM4 18a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zM5 22a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H5zM0 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM0 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM1 22a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
