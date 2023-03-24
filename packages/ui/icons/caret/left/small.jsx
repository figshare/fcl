import React, { PureComponent } from "react";


export default class CaretLeftSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="6"
        {...this.props}
        focusable={false}
        viewBox="0 0 6 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M6 16.061v5.878a1.06 1.06 0 0 1-1.677.862L.582 20.129a1.389 1.389 0 0 1 0-2.26l3.742-2.67c.701-.5 1.676 0 1.676.862z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
