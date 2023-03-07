import React, { PureComponent } from "react";


export default class FullscreenEnter extends PureComponent {
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
          d="M8.6 11a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h1.986l-2.869 2.869a.6.6 0 0 0 0 .848l.566.566a.6.6 0 0 0 .848 0L12 14.414V16.4a.6.6 0 0 0 .6.6h.8a.6.6 0 0 0 .6-.6v-4.8a.6.6 0 0 0-.6-.6H8.6zM.6 25a.6.6 0 0 1-.6-.6v-4.8a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6v1.986l2.869-2.869a.6.6 0 0 1 .848 0l.566.566a.6.6 0 0 1 0 .848L3.414 23H5.4a.6.6 0 0 1 .6.6v.8a.6.6 0 0 1-.6.6H.6z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
