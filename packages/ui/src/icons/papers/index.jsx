import React, { PureComponent } from "react";


export default class Papers extends PureComponent {
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
          d="M5 7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5zm1.5 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zM6 14.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zM6 20.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M3 8v17a1 1 0 0 0 1 1h13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M1 10v17a1 1 0 0 0 1 1h13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
