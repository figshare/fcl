import React, { PureComponent } from "react";


export default class EditMedium extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="8"
        {...this.props}
        focusable={false}
        viewBox="0 0 8 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1.85 21.91c-.842-.343-1.785-.232-1.785-.232L0 26l3.243-3.144s-.585-.618-1.393-.946zm2.07-9.184L.516 20.504c.018-.012 1.138.083 1.797.35.634.259 1.419.958 1.414.956l3.403-7.772c-.414-.365-.95-.763-1.548-1.007-.554-.225-1.157-.293-1.66-.305zm3.026-2.592c-.923-.376-1.92.069-2.31.959l-.221.504c.516.017 1.13.091 1.692.32.589.24 1.112.629 1.518.988l.22-.506c.39-.89.025-1.89-.899-2.265z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
