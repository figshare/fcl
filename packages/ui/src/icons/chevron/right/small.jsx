import React, { PureComponent } from "react";


export default class ChevronRightSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="6"
        {...this.props}
        focusable={false}
        viewBox="0 0 6 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M.293 13.793c.39-.39 1.024-.39 1.415 0l3.996 3.993a1.01 1.01 0 0 1 0 1.428l-3.996 3.993a1.001 1.001 0 0 1-1.415-1.414L3.588 18.5.293 15.207a1 1 0 0 1 0-1.414z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
