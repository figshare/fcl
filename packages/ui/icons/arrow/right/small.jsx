import React, { PureComponent } from "react";


export default class ArrowRightSmall extends PureComponent {
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
          d="M8.89 16.93 7.23 15.23a.82.82 0 0 1 0-1.14l.837-.855a.775.775 0 0 1 1.114 0l4.588 4.694a.82.82 0 0 1 0 1.14l-4.588 4.694a.775.775 0 0 1-1.114 0l-.836-.855a.82.82 0 0 1 0-1.14l1.659-1.697H1a1 1 0 0 1-1-1v-1.143a1 1 0 0 1 1-1h7.89z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
