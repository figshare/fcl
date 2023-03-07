import React, { PureComponent } from "react";


export default class VolumeMute extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="19"
        {...this.props}
        focusable={false}
        viewBox="0 0 19 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1.5 15.004c-1 0-1.5.5-1.5 1.5v3c0 1 .5 1.5 1.5 1.5H4l4.513 3.61A.3.3 0 0 0 9 24.379V11.628a.3.3 0 0 0-.487-.235L4 15.003H1.5zM15.387 20.791a.3.3 0 0 0 .424 0l.477-.477a.3.3 0 0 0 0-.424L14.4 18.003l1.887-1.886a.3.3 0 0 0 0-.424l-.477-.477a.3.3 0 0 0-.424 0L13.5 17.102l-1.887-1.886a.3.3 0 0 0-.424 0l-.477.477a.3.3 0 0 0 0 .424l1.887 1.886-1.887 1.887a.3.3 0 0 0 0 .424l.477.477a.3.3 0 0 0 .424 0l1.887-1.886 1.887 1.886z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
