import React, { PureComponent } from "react";


export default class ChevronDownLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="none"
        focusable={false}
        height="18"
        viewBox="0 0 18 18"
        width="18"
        {...this.props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M16.5455 4.82968C16.9848 5.26924 16.9848 5.98192 16.5455 6.42149L9.80345 13.167C9.35976 13.6109 8.64033 13.611 8.19655 13.167L1.4545 6.42149C1.01516 5.98192 1.01516 5.26924 1.4545 4.82967C1.89384 4.39011 2.60616 4.39011 3.0455 4.82968L9 10.7873L14.9545 4.82968C15.3938 4.39011 16.1062 4.39011 16.5455 4.82968Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
