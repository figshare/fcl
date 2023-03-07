import React, { PureComponent } from "react";


export default class CollapseSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="12"
        {...this.props}
        focusable={false}
        viewBox="0 0 12 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M11.515 13.359a1 1 0 1 0-1.03-1.715L6 14.334l-4.485-2.69a1 1 0 0 0-1.03 1.715l4.996 2.996c.32.192.719.192 1.039 0l4.995-2.996zM11.515 22.642a1 1 0 1 1-1.03 1.715L6 21.666l-4.485 2.69a1 1 0 1 1-1.03-1.714l4.996-2.997a1.01 1.01 0 0 1 1.039 0l4.995 2.997z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
