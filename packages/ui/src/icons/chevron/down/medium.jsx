import React, { PureComponent } from "react";


export default class ChevronDownMedium extends PureComponent {
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
          d="M13.707 15.293c.39.39.39 1.024 0 1.415l-5.993 5.996a1.01 1.01 0 0 1-1.428 0L.293 16.708a1 1 0 0 1 1.414-1.415L7 20.589l5.293-5.296a1 1 0 0 1 1.414 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
