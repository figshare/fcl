import React, { PureComponent } from "react";


export default class Upload extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="16"
        {...this.props}
        focusable={false}
        viewBox="0 0 16 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m9.807 17.109 1.698 1.66a.82.82 0 0 0 1.14 0l.855-.836a.776.776 0 0 0 0-1.114L8.806 12.23a.82.82 0 0 0-1.14 0L2.972 16.82a.776.776 0 0 0 0 1.114l.855.836a.82.82 0 0 0 1.14 0l1.697-1.659V25a1 1 0 0 0 1 1h1.143a1 1 0 0 0 1-1v-7.891zM0 10.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v1z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
