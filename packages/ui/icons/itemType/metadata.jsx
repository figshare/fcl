import React, { PureComponent } from "react";


export default class ItemTypeMetadata extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="24"
        preserveAspectRatio="xMidYMid meet"
        width="40"
        {...this.props}
        focusable={false}
        viewBox="0 0 40 24"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M25 11V9.5H15V11h10zM19 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM25 14v-1.5H15V14h10zM15 17v-1.5h6V17h-6z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M0 2.667A2.667 2.667 0 0 1 2.667 0h34.666A2.667 2.667 0 0 1 40 2.667v18.666A2.667 2.667 0 0 1 37.333 24H2.667A2.667 2.667 0 0 1 0 21.333V2.667zM20 3a2 2 0 0 1 2 2h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5a2 2 0 0 1 2-2z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
