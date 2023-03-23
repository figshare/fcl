import React, { PureComponent } from "react";


export default class PauseSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="12"
        {...this.props}
        focusable={false}
        viewBox="0 0 12 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1 9a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1H1zm7 0a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1H8z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
