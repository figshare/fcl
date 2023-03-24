import React, { PureComponent } from "react";


export default class Project extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="#8D8D8D"
        height="120"
        preserveAspectRatio="xMidYMid meet"
        width="147"
        {...this.props}
        focusable={false}
        viewBox="0 0 147 120"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M13.364 0C5.984 0 0 5.97 0 13.333v93.334C0 114.03 5.983 120 13.364 120h120.272c7.381 0 13.364-5.97 13.364-13.333V31.111c0-7.364-5.983-13.333-13.364-13.333H64.591L45.979 2.922A13.383 13.383 0 0 0 37.63 0H13.364z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
