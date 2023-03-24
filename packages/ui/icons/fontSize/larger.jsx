import React, { PureComponent } from "react";


export default class FontSizeLarger extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="16"
        {...this.props}
        focusable={false}
        viewBox="0 0 16 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M16 26h-3.502l-1.393-3.634H4.731L3.415 26H0l6.21-16h3.405L16 26zm-5.928-6.33-2.197-5.937L5.72 19.67h4.351z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
