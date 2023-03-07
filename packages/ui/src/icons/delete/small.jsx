import React, { PureComponent } from "react";


export default class DeleteSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="14"
        {...this.props}
        focusable={false}
        viewBox="0 0 14 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M5.056 17.2a.395.395 0 0 0-.39.4v4.8c0 .22.175.4.39.4.214 0 .388-.18.388-.4v-4.8c0-.22-.174-.4-.388-.4zM6.611 17.6c0-.22.174-.4.389-.4.215 0 .389.18.389.4v4.8c0 .22-.174.4-.389.4a.395.395 0 0 1-.389-.4v-4.8zM8.944 17.2a.395.395 0 0 0-.388.4v4.8c0 .22.174.4.388.4.215 0 .39-.18.39-.4v-4.8c0-.22-.175-.4-.39-.4z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M.778 14a.79.79 0 0 0-.778.8c0 .442.348.8.778.8h.778v8.8c0 .884.696 1.6 1.555 1.6h7.778c.859 0 1.555-.716 1.555-1.6v-8.8h.778a.79.79 0 0 0 .778-.8.79.79 0 0 0-.778-.8H.778zm10.11 1.6H3.112v8.8h7.778v-8.8z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M5.444 11.2h3.112c.644 0 1.166.537 1.166 1.2h1.167c0-1.325-1.045-2.4-2.333-2.4H5.444c-1.288 0-2.333 1.075-2.333 2.4h1.167c0-.663.522-1.2 1.166-1.2z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
