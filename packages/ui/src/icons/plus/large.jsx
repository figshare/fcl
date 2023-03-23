import React, { PureComponent } from "react";


export default class PlusLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="14"
        {...this.props}
        focusable={false}
        viewBox="0 0 14 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M6.5 11.5a.5.5 0 0 0-.5.5v5.5H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H6V25a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 8 25v-5.5h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H8V12a.5.5 0 0 0-.5-.5h-1z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
