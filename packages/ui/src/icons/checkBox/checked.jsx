import React, { PureComponent } from "react";


export default class CheckBoxChecked extends PureComponent {
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
          d="M0 12a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V12zm7.158 6.6L4.21 15.667 2 17.867 7.158 23 16 14.2 13.79 12l-6.632 6.6z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
