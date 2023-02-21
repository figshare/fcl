import React, { PureComponent } from "react";


export default class WarningSmall extends PureComponent {
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
          d="M.124 23.253 6.42 12.847c.28-.463.883-.463 1.162 0l6.295 10.406c.32.53-.015 1.247-.582 1.247H.705c-.566 0-.9-.718-.58-1.247zM7 15.93a.866.866 0 0 0-.875.857v3c0 .473.392.857.875.857a.866.866 0 0 0 .875-.857v-3A.866.866 0 0 0 7 15.929zm0 7.285a.866.866 0 0 0 .875-.857A.866.866 0 0 0 7 21.5a.866.866 0 0 0-.875.857c0 .474.392.857.875.857z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
