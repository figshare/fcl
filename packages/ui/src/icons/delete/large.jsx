import React, { PureComponent } from "react";


export default class DeleteLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="24"
        {...this.props}
        focusable={false}
        viewBox="0 0 24 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M8.667 16.7a.658.658 0 0 0-.667.65v7.8c0 .359.298.65.667.65a.658.658 0 0 0 .666-.65v-7.8a.658.658 0 0 0-.666-.65zM11.333 17.35c0-.359.299-.65.667-.65.368 0 .667.291.667.65v7.8c0 .359-.299.65-.667.65a.659.659 0 0 1-.667-.65v-7.8zM15.333 16.7a.658.658 0 0 0-.666.65v7.8c0 .359.298.65.666.65a.659.659 0 0 0 .667-.65v-7.8a.659.659 0 0 0-.667-.65z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M1.333 11.5C.597 11.5 0 12.082 0 12.8c0 .718.597 1.3 1.333 1.3h1.334v14.3c0 1.436 1.194 2.6 2.666 2.6h13.334c1.472 0 2.666-1.164 2.666-2.6V14.1h1.334c.736 0 1.333-.582 1.333-1.3 0-.718-.597-1.3-1.333-1.3H1.333zm17.334 2.6H5.333v14.3h13.334V14.1z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M9.333 6.95h5.334c1.104 0 2 .873 2 1.95h2c0-2.154-1.791-3.9-4-3.9H9.333c-2.209 0-4 1.746-4 3.9h2c0-1.077.896-1.95 2-1.95z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
