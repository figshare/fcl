import React, { PureComponent } from "react";


export default class NotificationActive extends PureComponent {
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
          d="M9.833 8.235A1.588 1.588 0 0 0 7.41 9.59v.72A6.872 6.872 0 0 0 2.12 17v4.82L0 23.94V25h18v-1.06l-2.12-2.12V17c0-.45-.043-.89-.126-1.316a5 5 0 0 1-5.92-7.449zM9 28c-1.1 0-1.99-.89-1.99-1.99h3.98c0 1.1-.89 1.99-1.99 1.99z"
          fillRule="evenodd"
        />
        <path
          className="notificationCircle"
          clipRule="evenodd"
          d="M18 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
          fill="#A60845"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
