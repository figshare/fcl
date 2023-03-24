import React, { PureComponent } from "react";


export default class ProjectLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="36"
        {...this.props}
        focusable={false}
        viewBox="0 0 36 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M3.273 3C1.465 3 0 4.492 0 6.333v23.334C0 31.507 1.465 33 3.273 33h29.454C34.535 33 36 31.508 36 29.667v-18.89c0-1.84-1.465-3.333-3.273-3.333H15.818L11.26 3.73A3.236 3.236 0 0 0 9.216 3H3.273z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
