import React, { PureComponent } from "react";


export default class CaretUpSmall extends PureComponent {
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
          d="M6.939 22H1.06a1.06 1.06 0 0 1-.86-1.677l2.672-3.741a1.389 1.389 0 0 1 2.26 0l2.67 3.742c.5.701 0 1.676-.862 1.676z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
