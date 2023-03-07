import React, { PureComponent } from "react";


export default class DocumentSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="15"
        {...this.props}
        focusable={false}
        viewBox="0 0 15 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          d="M3 13.6a.1.1 0 0 1 .1-.1h8.8a.1.1 0 0 1 .1.1v.8a.1.1 0 0 1-.1.1H3.1a.1.1 0 0 1-.1-.1v-.8zM3 15.6a.1.1 0 0 1 .1-.1h8.8a.1.1 0 0 1 .1.1v.8a.1.1 0 0 1-.1.1H3.1a.1.1 0 0 1-.1-.1v-.8zM3.1 17.5a.1.1 0 0 0-.1.1v.8a.1.1 0 0 0 .1.1h8.8a.1.1 0 0 0 .1-.1v-.8a.1.1 0 0 0-.1-.1H3.1zM3 19.6a.1.1 0 0 1 .1-.1h8.8a.1.1 0 0 1 .1.1v.8a.1.1 0 0 1-.1.1H3.1a.1.1 0 0 1-.1-.1v-.8zM3.1 21.5a.1.1 0 0 0-.1.1v.8a.1.1 0 0 0 .1.1h8.8a.1.1 0 0 0 .1-.1v-.8a.1.1 0 0 0-.1-.1H3.1z"
        />
        <path
          clipRule="evenodd"
          d="M0 10a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V10zm13.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h12z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
