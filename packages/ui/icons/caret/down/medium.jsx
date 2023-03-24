import React, { PureComponent } from "react";


export default class CaretDownMedium extends PureComponent {
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
          d="M.962 15h10.076a.96.96 0 0 1 .758 1.55l-4.543 5.836a1.59 1.59 0 0 1-2.51 0l-4.54-5.837A.96.96 0 0 1 .963 15z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
