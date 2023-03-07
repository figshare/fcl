import React, { PureComponent } from "react";


export default class ZoomOut extends PureComponent {
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
          d="m17.835 24.445-3.21-3.208c.787-1.227 1.109-2.786 1.109-4.353C15.734 12.531 12.241 9 7.885 9 3.531 8.999 0 12.6 0 16.955s3.53 7.779 7.885 7.779c1.566 0 3.126-.322 4.353-1.108l3.209 3.21a.566.566 0 0 0 .795 0l1.594-1.593a.565.565 0 0 0-.001-.798zm-9.95-1.928c-3.105 0-5.631-2.563-5.631-5.668a5.64 5.64 0 0 1 5.631-5.632 5.639 5.639 0 0 1 5.633 5.632c0 3.105-2.527 5.668-5.633 5.668z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M11.5 16a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h7z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
