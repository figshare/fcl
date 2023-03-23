import React, { PureComponent } from "react";


export default class GoToLinkLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="12"
        {...this.props}
        focusable={false}
        viewBox="0 0 12 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M6 12.5a.5.5 0 0 1 .5-.5h4.8a.7.7 0 0 1 .7.7v4.8a.5.5 0 0 1-1 0v-3.793l-4.646 4.647a.5.5 0 1 1-.708-.707L10.293 13H6.5a.5.5 0 0 1-.5-.5z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M1 14a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2.5a.5.5 0 0 0-1 0V23H1v-8h2.5a.5.5 0 0 0 0-1H1z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
