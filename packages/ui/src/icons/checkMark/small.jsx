import React, { PureComponent } from "react";


export default class CheckMarkSmall extends PureComponent {
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
          d="m2.223 17.117 2.04 1.95a.267.267 0 0 0 .366 0l5.148-4.922a.535.535 0 0 1 .732 0l1.34 1.28a.48.48 0 0 1 0 .701l-7.036 6.729a.535.535 0 0 1-.733 0L.152 19.098a.48.48 0 0 1 0-.7l1.339-1.281a.535.535 0 0 1 .732 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
