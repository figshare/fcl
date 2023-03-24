import React, { PureComponent } from "react";


export default class PlaySmall extends PureComponent {
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
          d="M0 9.99v15.995c0 .743.795 1.297 1.581.861.63-.348 9.113-7.13 9.992-7.981.572-.554.567-1.181 0-1.733-.633-.616-9.11-7.508-10.025-7.999C.878 8.773 0 9.171 0 9.99z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
