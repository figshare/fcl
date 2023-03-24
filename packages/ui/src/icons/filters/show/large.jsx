import React, { PureComponent } from "react";


export default class FiltersShowLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="22"
        {...this.props}
        focusable={false}
        viewBox="0 0 22 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M5 7a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0v-2H1a1 1 0 1 1 0-2h4V7zM9 10a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1zM1 17a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H1zM17 17v-2a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-2h4a1 1 0 1 0 0-2h-4zM0 26a1 1 0 0 1 1-1h4v-2a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-2H1a1 1 0 0 1-1-1zM10 25a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H10z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
