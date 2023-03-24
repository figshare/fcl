import React, { PureComponent } from "react";


export default class LockSmall extends PureComponent {
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
          d="M1.333 15.59H2v-1.272C2 12.21 3.79 10.5 6 10.5s4 1.71 4 3.818v1.273h.667c.736 0 1.333.57 1.333 1.273v6.363c0 .703-.597 1.273-1.333 1.273H1.333C.597 24.5 0 23.93 0 23.227v-6.363c0-.703.597-1.273 1.333-1.273zm7-1.272v1.273H3.667v-1.273c0-1.23 1.044-2.227 2.333-2.227 1.289 0 2.333.997 2.333 2.227zM6 21.954c1.105 0 2-.854 2-1.909 0-1.054-.895-1.909-2-1.909s-2 .855-2 1.91c0 1.054.895 1.909 2 1.909z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
