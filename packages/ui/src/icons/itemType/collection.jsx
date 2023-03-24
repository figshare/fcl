import React, { PureComponent } from "react";


export default class ItemTypeCollection extends PureComponent {
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
          d="M6.5 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM15.5 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM27.5 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM33.5 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM9.5 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM15.5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM27.5 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM33.5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM9.5 21a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM15.5 24a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM27.5 21a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM33.5 24a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
