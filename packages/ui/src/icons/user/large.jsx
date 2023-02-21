import React, { PureComponent } from "react";


export default class UserLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="20"
        {...this.props}
        focusable={false}
        viewBox="0 0 20 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M17.421 23.351s-1.484-.47-3.892-1.343c-.023-.43-.337-1.01-.892-1.01H11.856l.115-1.722c1.197-.579 1.732-1.486 1.959-2.695.17-.907.364-1.93.364-3.181 0-1.235-.321-4.4-4.326-4.4h-.1c-3.585-.001-4.144 3.09-4.144 4.399 0 .788.207 2.31.364 3.182.192 1.067.681 2.238 1.958 2.694l.114 1.722h-.781c-.556 0-.862.62-.893 1.05-2.33.913-4.165 1.424-4.165 1.424C.578 24.167.05 23.71 0 24.618v1.549l.03.221c.03.12.088.221.157.314.1.134.233.22.39.264.059.015.117.034.182.034h18.459a.69.69 0 0 0 .534-.255c.203-.193.248-.578.248-.578V24.686a.84.84 0 0 0-.027-.164c-.19-.632-.711-.32-2.552-1.17z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
