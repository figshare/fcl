import React, { PureComponent } from "react";


export default class FullscreenExit extends PureComponent {
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
          d="M13.541 16.859a.6.6 0 0 1-.6.6h-4.8a.6.6 0 0 1-.6-.6v-4.8a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6v1.985l2.869-2.868a.6.6 0 0 1 .848 0l.566.565a.6.6 0 0 1 0 .849l-2.869 2.869h1.986a.6.6 0 0 1 .6.6v.8zM6.459 19.141a.6.6 0 0 0-.6-.6h-4.8a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h1.985L.176 23.41a.6.6 0 0 0 0 .848l.565.566a.6.6 0 0 0 .849 0l2.869-2.869v1.986a.6.6 0 0 0 .6.6h.8a.6.6 0 0 0 .6-.6v-4.8z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
