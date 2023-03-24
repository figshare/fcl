import React, { PureComponent } from "react";


export default class ArrowRightLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="22"
        {...this.props}
        focusable={false}
        viewBox="0 0 22 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m14.104 21.294-2.741 2.758a1.251 1.251 0 0 0 0 1.762l1.313 1.321a1.233 1.233 0 0 0 1.751 0l7.21-7.254a1.251 1.251 0 0 0 0-1.762l-7.21-7.254a1.233 1.233 0 0 0-1.75 0l-1.314 1.321a1.251 1.251 0 0 0 0 1.762l2.742 2.76H1c-.552 0-1 .422-1 .944v2.698c0 .522.448.944 1 .944h13.104z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
