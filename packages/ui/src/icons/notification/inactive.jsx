import React, { PureComponent } from "react";


export default class NotificationInactive extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="18"
        {...this.props}
        focusable={false}
        viewBox="0 0 18 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M15.88 17v4.82L18 23.94V25H0v-1.06l2.12-2.12V17c0-3.25 2.25-5.97 5.29-6.69v-.72C7.41 8.71 8.12 8 9 8c.88 0 1.59.71 1.59 1.59v.72A6.872 6.872 0 0 1 15.88 17zM9 28c-1.1 0-1.99-.89-1.99-1.99h3.98c0 1.1-.89 1.99-1.99 1.99z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
