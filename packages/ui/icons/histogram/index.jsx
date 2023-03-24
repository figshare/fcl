import React, { PureComponent } from "react";


export default class Histogram extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="22"
        {...this.props}
        focusable={false}
        viewBox="0 0 22 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M22 26V14l-3.143 3-3.143-4-3.143 1-3.142 3-3.143-5-3.143 2L0 10v16h22z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
