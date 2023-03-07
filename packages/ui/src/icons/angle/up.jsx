import React, { PureComponent } from "react";


export default class AngleUp extends PureComponent {
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
          d="m9 17.51 5.838 6.165c.41.433 1.087.433 1.497 0l1.368-1.444a1.1 1.1 0 0 0 0-1.505l-7.954-8.4a1.025 1.025 0 0 0-1.498 0l-7.954 8.4a1.1 1.1 0 0 0 0 1.505l1.368 1.444c.41.433 1.087.433 1.497 0L9 17.509z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
