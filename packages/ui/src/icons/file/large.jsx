import React, { PureComponent } from "react";


export default class FileLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="30"
        preserveAspectRatio="xMidYMid meet"
        width="21"
        {...this.props}
        focusable={false}
        viewBox="0 0 21 30"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1.08733 30L0.996094 0H15.6564L20.9961 5V30H1.08733ZM19.3294 7.5H13.4961V1.66667H2.66285V28.3333H19.3295L19.3294 7.5Z"
          fill="#8D8D8D"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
