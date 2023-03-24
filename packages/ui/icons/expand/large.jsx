import React, { PureComponent } from "react";


export default class ExpandLarge extends PureComponent {
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
          d="M19.832 21.001c.306.517.182 1.216-.277 1.56L10.56 29.31a.917.917 0 0 1-1.12 0L.445 22.562c-.46-.345-.583-1.044-.277-1.56.306-.518.927-.658 1.387-.313L10 27.025l8.445-6.336c.46-.345 1.08-.205 1.387.312zM19.832 15c.306-.517.182-1.216-.277-1.56L10.56 6.691a.918.918 0 0 0-1.12 0L.445 13.439c-.46.345-.583 1.044-.277 1.56.306.518.927.658 1.387.313L10 8.976l8.445 6.336c.46.345 1.08.205 1.387-.312z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
