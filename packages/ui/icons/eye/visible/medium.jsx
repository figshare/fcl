import React, { PureComponent } from "react";


export default class EyeVisibleMedium extends PureComponent {
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
          d="M20 17.965C20 18.89 16.713 24 10 24c-6.095 0-10-5.134-10-6.035C0 17.161 3.819 12 9.943 12 16.498 12 20 17.161 20 17.965zm-4.887.05c0-2.659-2.301-4.814-5.14-4.814-2.84 0-5.14 2.155-5.14 4.814 0 2.658 2.3 4.813 5.14 4.813 2.839 0 5.14-2.155 5.14-4.813zm-5.14-3.916c-2.31 0-4.183 1.753-4.183 3.916 0 2.163 1.873 3.917 4.183 3.917 2.31 0 4.182-1.753 4.182-3.917 0-2.163-1.873-3.916-4.182-3.916z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
