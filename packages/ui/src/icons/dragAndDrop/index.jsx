import React, { PureComponent } from "react";


export default class DragAndDrop extends PureComponent {
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
          d="M.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H.5zM.5 20a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H.5z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
