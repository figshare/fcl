import React, { PureComponent } from "react";


export default class SortUp extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="10"
        {...this.props}
        focusable={false}
        viewBox="0 0 10 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m4.49 13.115-3.418 2.258a.495.495 0 0 1-.67-.12L.1 14.848a.507.507 0 0 1 .12-.72l4.491-3.042a.494.494 0 0 1 .554 0l4.513 3.042c.238.16.294.49.122.721l-.301.406a.495.495 0 0 1-.67.12l-3.442-2.26v11.584a.3.3 0 0 1-.3.302H4.79a.3.3 0 0 1-.299-.302V13.115z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
