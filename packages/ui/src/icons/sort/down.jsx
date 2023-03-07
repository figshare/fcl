import React, { PureComponent } from "react";


export default class SortDown extends PureComponent {
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
          d="m4.49 22.885-3.418-2.258a.495.495 0 0 0-.67.12l-.302.406a.507.507 0 0 0 .12.72l4.491 3.042a.494.494 0 0 0 .554 0l4.513-3.042a.507.507 0 0 0 .122-.721l-.301-.407a.495.495 0 0 0-.67-.12l-3.442 2.262V11.302a.3.3 0 0 0-.3-.302H4.79a.3.3 0 0 0-.299.302v11.583z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
