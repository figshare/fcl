import React, { PureComponent } from "react";


export default class RetryMedium extends PureComponent {
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
          d="M17.488 10.51a.3.3 0 0 1 .512.212v6.066c0 .62-.504 1.121-1.125 1.121H15.75v.006h-4.966a.3.3 0 0 1-.211-.512l3.146-3.136c-1.217-1.2-2.872-1.956-4.718-1.956-3.729 0-6.75 3.01-6.75 6.724 0 3.712 3.022 6.724 6.75 6.724a6.741 6.741 0 0 0 5.065-2.287.312.312 0 0 1 .453-.02l1.162 1.166c.11.111.117.288.013.404A8.988 8.988 0 0 1 9 28c-4.97 0-9-4.014-9-8.965 0-4.952 4.03-8.967 9-8.967 2.468 0 4.697.997 6.32 2.601l2.168-2.16z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
