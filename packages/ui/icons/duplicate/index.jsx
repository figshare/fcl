import React, { PureComponent } from "react";


export default class Duplicate extends PureComponent {
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
          d="M3 12v-1.5A1.5 1.5 0 0 1 4.5 9h8a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H11v1.5A1.5 1.5 0 0 1 9.5 27h-8A1.5 1.5 0 0 1 0 25.5v-12A1.5 1.5 0 0 1 1.5 12H3zm1.5-2h8a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H11v-9.5A1.5 1.5 0 0 0 9.5 12H4v-1.5a.5.5 0 0 1 .5-.5zm5.5 4a1 1 0 0 0-1-1H1.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V14z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
