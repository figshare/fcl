import React, { PureComponent } from "react";


export default class ListSmall extends PureComponent {
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
          d="M1 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM5 13a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H5zM5 17a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H5zM4 22a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zM0 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM1 21a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
