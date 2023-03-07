import React, { PureComponent } from "react";


export default class ArrowLeftLarge extends PureComponent {
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
          d="m7.896 20.93 2.741 2.92a1.38 1.38 0 0 1 0 1.865l-1.313 1.399a1.185 1.185 0 0 1-1.751 0l-7.21-7.681a1.38 1.38 0 0 1 0-1.866l7.21-7.68a1.185 1.185 0 0 1 1.75 0l1.314 1.398a1.38 1.38 0 0 1 0 1.866l-2.742 2.921H21a1 1 0 0 1 1 1v2.858a1 1 0 0 1-1 1H7.896z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
