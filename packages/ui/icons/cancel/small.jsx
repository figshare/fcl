import React, { PureComponent } from "react";


export default class CancelSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        focusable={false}
        height="36"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 10 36"
        width="10"
        xmlns="https://www.w3.org/2000/svg"
        {...this.props}
      >
        <path
          clipRule="evenodd"
          d="M1.282 14.22A.751.751 0 0 0 .22 15.282L3.938 19 .22 22.718a.751.751 0 0 0 1.062 1.062L5 20.062l3.717 3.718a.751.751 0 1 0 1.062-1.062L6.062 19l3.718-3.718a.751.751 0 0 0-1.062-1.062L5 17.938 1.282 14.22z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
