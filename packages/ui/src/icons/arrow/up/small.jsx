import React, { PureComponent } from "react";


export default class ArrowUpSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="11"
        {...this.props}
        focusable={false}
        viewBox="0 0 11 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m7.07 16.61 1.699 1.66a.82.82 0 0 0 1.14 0l.855-.837a.775.775 0 0 0 0-1.114L6.07 11.731a.82.82 0 0 0-1.14 0L.236 16.319a.775.775 0 0 0 0 1.114l.855.836a.82.82 0 0 0 1.14 0l1.697-1.659v7.89a1 1 0 0 0 1 1h1.143a1 1 0 0 0 1-1v-7.89z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
