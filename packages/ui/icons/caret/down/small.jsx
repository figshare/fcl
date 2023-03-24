import React, { PureComponent } from "react";


export default class CaretDownSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="8"
        {...this.props}
        focusable={false}
        viewBox="0 0 8 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1.061 16H6.94c.862 0 1.363.975.862 1.677l-2.672 3.741a1.389 1.389 0 0 1-2.26 0l-2.67-3.742C-.3 16.975.2 16 1.061 16z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
