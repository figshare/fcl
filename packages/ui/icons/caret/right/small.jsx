import React, { PureComponent } from "react";


export default class CaretRightSmall extends PureComponent {
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
          d="M0 21.939V16.06a1.06 1.06 0 0 1 1.677-.862l3.741 2.672a1.389 1.389 0 0 1 0 2.26l-3.742 2.67C.975 23.3 0 22.8 0 21.939z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
