import React, { PureComponent } from "react";


export default class PlusMedium extends PureComponent {
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
          d="M5.5 12.5a.5.5 0 0 0-.5.5v4.5H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H5V24a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 7 24v-4.5h4.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H7V13a.5.5 0 0 0-.5-.5h-1z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
