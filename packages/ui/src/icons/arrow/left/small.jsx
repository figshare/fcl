import React, { PureComponent } from "react";


export default class ArrowLeftSmall extends PureComponent {
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
          d="m5.11 16.93 1.66-1.699a.82.82 0 0 0 0-1.14l-.837-.855a.775.775 0 0 0-1.114 0L.231 17.93a.82.82 0 0 0 0 1.14l4.588 4.694a.775.775 0 0 0 1.114 0l.836-.855a.82.82 0 0 0 0-1.14L5.11 20.072H13a1 1 0 0 0 1-1v-1.143a1 1 0 0 0-1-1H5.11z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
