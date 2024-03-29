import React, { PureComponent } from "react";


export default class Directory extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="16"
        preserveAspectRatio="xMidYMid meet"
        width="16"
        {...this.props}
        focusable={false}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 3C0 1.89688 0.896875 1 2 1H6.12813C6.725 1 7.29688 1.2375 7.71875 1.65937L9.05937 3H14C15.1031 3 16 3.89687 16 5V13C16 14.1031 15.1031 15 14 15H2C0.896875 15 0 14.1031 0 13V3ZM2 2.5C1.725 2.5 1.5 2.725 1.5 3V13C1.5 13.275 1.725 13.5 2 13.5H14C14.275 13.5 14.5 13.275 14.5 13V5C14.5 4.725 14.275 4.5 14 4.5H8.95625C8.625 4.5 8.30625 4.36875 8.07187 4.13438L6.65938 2.71875C6.51875 2.57812 6.32812 2.5 6.12813 2.5H2Z" />
      </svg>
    );
  }
}
