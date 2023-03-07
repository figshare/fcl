import React, { PureComponent } from "react";


export default class CheckMarkLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="22"
        {...this.props}
        focusable={false}
        viewBox="0 0 22 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m4.076 15.887 3.74 3.686a.48.48 0 0 0 .671 0l9.437-9.299a.96.96 0 0 1 1.343 0l2.455 2.42c.37.364.37.957 0 1.322L8.823 26.726a.96.96 0 0 1-1.343 0L.278 19.629a.926.926 0 0 1 0-1.323l2.455-2.419a.96.96 0 0 1 1.343 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
