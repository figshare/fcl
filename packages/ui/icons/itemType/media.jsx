import React, { PureComponent } from "react";


export default class ItemTypeMedia extends PureComponent {
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
          d="M17.333 8.471c0-.207.227-.335.404-.229l5.882 3.53a.267.267 0 0 1 0 .457l-5.882 3.529a.267.267 0 0 1-.404-.229V8.471z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M0 2.667A2.667 2.667 0 0 1 2.667 0h34.666A2.667 2.667 0 0 1 40 2.667v18.666A2.667 2.667 0 0 1 37.333 24H2.667A2.667 2.667 0 0 1 0 21.333V2.667zM12 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
