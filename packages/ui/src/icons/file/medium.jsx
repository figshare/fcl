import React, { PureComponent } from "react";


export default class FileMedium extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="21"
        {...this.props}
        focusable={false}
        viewBox="0 0 21 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1.08733 33L0.996094 3H15.6564L20.9961 8V33H1.08733ZM19.3294 10.5H13.4961V4.66667H2.66285V31.3333H19.3295L19.3294 10.5Z"
          fill="#8D8D8D"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
