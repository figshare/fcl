import React, { PureComponent } from "react";


export default class ExpandToLeft extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="21"
        {...this.props}
        focusable={false}
        viewBox="0 0 21 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M9 11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V11zm10 0a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h8z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M4.756 21.766a.86.86 0 0 1-1.18 0L.246 18.57a.785.785 0 0 1 0-1.142l3.33-3.195a.86.86 0 0 1 1.18 0 .777.777 0 0 1 0 1.132L2.792 17.25H6.25a.75.75 0 0 1 0 1.5H2.792l1.964 1.884a.777.777 0 0 1 0 1.132z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
