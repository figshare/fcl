import React, { PureComponent } from "react";


export default class Statistics extends PureComponent {
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
          d="M19 12h.4a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6v-2.986l-7.293 7.293a1 1 0 0 1-1.414 0L6 19.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0L10 20.586 16.586 14H13.6a.6.6 0 0 1-.6-.6v-.8a.6.6 0 0 1 .6-.6H19z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
