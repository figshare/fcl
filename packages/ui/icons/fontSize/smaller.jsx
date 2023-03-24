import React, { PureComponent } from "react";


export default class FontSizeSmaller extends PureComponent {
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
          d="M12 24H9.373L8.33 21.274h-4.78L2.562 24H0l4.658-12h2.553L12 24zm-4.446-4.748L5.906 14.8l-1.615 4.452h3.263z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
