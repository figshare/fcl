import React, { PureComponent } from "react";


export default class LockMedium extends PureComponent {
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
          d="M1.556 14.182h.777v-1.546C2.333 10.076 4.423 8 7 8s4.667 2.076 4.667 4.636v1.546h.777c.86 0 1.556.692 1.556 1.545v7.727A1.55 1.55 0 0 1 12.444 25H1.556A1.55 1.55 0 0 1 0 23.454v-7.727a1.55 1.55 0 0 1 1.556-1.545zm8.166-1.546v1.546H4.278v-1.546A2.713 2.713 0 0 1 7 9.932a2.713 2.713 0 0 1 2.722 2.704zM7 21.91a2.326 2.326 0 0 0 2.333-2.318A2.326 2.326 0 0 0 7 17.273a2.326 2.326 0 0 0-2.333 2.318A2.326 2.326 0 0 0 7 21.909z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
