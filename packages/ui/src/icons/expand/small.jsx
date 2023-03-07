import React, { PureComponent } from "react";


export default class ExpandSmall extends PureComponent {
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
          d="M11.858 19.987a1 1 0 0 1-.343 1.372L6.52 24.356a1.01 1.01 0 0 1-1.039 0L.486 21.359a1 1 0 0 1 1.03-1.715L6 22.335l4.485-2.691a1 1 0 0 1 1.372.343zM11.858 16.015a1 1 0 0 0-.343-1.372L6.52 11.646a1.01 1.01 0 0 0-1.04 0L.487 14.643a1 1 0 1 0 1.029 1.715L6 13.666l4.486 2.692a1 1 0 0 0 1.372-.343z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
