import React, { PureComponent } from "react";


export default class DeleteMedium extends PureComponent {
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
          d="M6.5 17a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5zM8.5 17.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0v-6zM11.5 17a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M1 13a1 1 0 1 0 0 2h1v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V15h1a1 1 0 1 0 0-2H1zm13 2H4v11h10V15z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M7 9.5h4a1.5 1.5 0 0 1 1.5 1.5H14a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3h1.5A1.5 1.5 0 0 1 7 9.5z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
