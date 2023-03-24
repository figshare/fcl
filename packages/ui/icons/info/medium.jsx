import React, { PureComponent } from "react";


export default class InfoMedium extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="18"
        {...this.props}
        focusable={false}
        viewBox="0 0 18 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M9 9a9 9 0 1 0 0 18A9 9 0 1 0 9 9zm1.125 13.5a1.125 1.125 0 1 1-2.25 0v-5.625a1.125 1.125 0 1 1 2.25 0V22.5zM9.02 14.645a1.145 1.145 0 1 1-.001-2.29 1.145 1.145 0 0 1 .001 2.29z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
