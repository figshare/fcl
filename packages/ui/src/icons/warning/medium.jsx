import React, { PureComponent } from "react";


export default class WarningMedium extends PureComponent {
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
          d="M.177 25.13 9.17 9.52c.4-.693 1.26-.693 1.66 0l8.993 15.61c.456.793-.022 1.87-.83 1.87H1.007c-.81 0-1.287-1.077-.83-1.87zM10 14.143c-.69 0-1.25.575-1.25 1.286v4.5c0 .71.56 1.285 1.25 1.285s1.25-.575 1.25-1.285v-4.5c0-.71-.56-1.286-1.25-1.286zm0 10.928c.69 0 1.25-.575 1.25-1.285S10.69 22.5 10 22.5s-1.25.576-1.25 1.286c0 .71.56 1.285 1.25 1.285z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
