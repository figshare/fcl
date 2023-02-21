import React, { PureComponent } from "react";


export default class ReplayMedium extends PureComponent {
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
          d="M.512 10.51a.3.3 0 0 0-.512.212v6.066c0 .62.504 1.121 1.125 1.121H2.25v.006h4.966a.3.3 0 0 0 .211-.512L4.28 14.267c1.218-1.2 2.873-1.956 4.72-1.956 3.728 0 6.75 3.01 6.75 6.724 0 3.712-3.023 6.724-6.75 6.724a6.741 6.741 0 0 1-5.065-2.287.312.312 0 0 0-.454-.02L2.32 24.619a.293.293 0 0 0-.013.404A8.988 8.988 0 0 0 9 28C13.97 28 18 23.986 18 19.035c0-4.952-4.03-8.967-9-8.967a8.963 8.963 0 0 0-6.32 2.601L.512 10.51z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
