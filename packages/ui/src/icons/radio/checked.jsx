import React, { PureComponent } from "react";


export default class RadioChecked extends PureComponent {
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
          d="M8 25a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 1a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M12 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
