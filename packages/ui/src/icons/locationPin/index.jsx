import React, { PureComponent } from "react";


export default class LocationPin extends PureComponent {
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
          d="M5.019 9C1.393 9-.705 12.581.217 15.57 1.306 19.106 5.019 27 5.019 27s3.603-7.91 4.747-11.43C10.752 12.54 8.518 9 5.019 9zm0 8.592c-1.942 0-3.519-1.594-3.519-3.56 0-1.967 1.576-3.562 3.519-3.562 1.941 0 3.518 1.595 3.518 3.561 0 1.967-1.577 3.561-3.518 3.561z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
