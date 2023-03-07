import React, { PureComponent } from "react";


export default class MinusSmall extends PureComponent {
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
        <rect height="2" rx=".5" width="8" y="18" />
      </svg>
    );
  }
}
