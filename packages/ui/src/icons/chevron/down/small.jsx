import React, { PureComponent } from "react";


export default class ChevronDownSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="10"
        {...this.props}
        focusable={false}
        viewBox="0 0 10 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M9.707 16.293c.39.39.39 1.024 0 1.415l-3.993 3.996a1.01 1.01 0 0 1-1.428 0L.293 17.708a1.001 1.001 0 0 1 1.414-1.415L5 19.588l3.293-3.295a1 1 0 0 1 1.414 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
