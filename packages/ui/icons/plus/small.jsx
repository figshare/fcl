import React, { PureComponent } from "react";


export default class PlusSmall extends PureComponent {
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
          d="M3.5 15a.5.5 0 0 0-.5.5V18H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H3v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V20h2.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H5v-2.5a.5.5 0 0 0-.5-.5h-1z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
