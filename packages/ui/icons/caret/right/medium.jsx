import React, { PureComponent } from "react";


export default class CaretRightMedium extends PureComponent {
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
          d="M0 24.538V14.462a.96.96 0 0 1 1.55-.758l5.836 4.543a1.59 1.59 0 0 1 0 2.51l-5.837 4.54A.96.96 0 0 1 0 24.537z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
