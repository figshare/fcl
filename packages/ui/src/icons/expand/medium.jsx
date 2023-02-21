import React, { PureComponent } from "react";


export default class ExpandMedium extends PureComponent {
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
          d="M15.814 20.421a1 1 0 0 1-.233 1.395l-6.994 4.996a1.01 1.01 0 0 1-1.174 0L.419 21.816A1 1 0 1 1 1.58 20.19l6.42 4.585 6.418-4.585a1 1 0 0 1 1.395.232zM15.814 15.584a1 1 0 0 0-.233-1.395L8.587 9.193a1.01 1.01 0 0 0-1.174 0L.419 14.189a1 1 0 1 0 1.162 1.627l6.42-4.585 6.418 4.585a1 1 0 0 0 1.395-.232z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
