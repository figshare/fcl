import React, { PureComponent } from "react";


export default class ArrowUpLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="18"
        {...this.props}
        focusable={false}
        viewBox="0 0 18 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m11.43 15.396 2.92 2.741a1.38 1.38 0 0 0 1.865 0l1.399-1.313a1.185 1.185 0 0 0 0-1.751l-7.681-7.21a1.38 1.38 0 0 0-1.866 0l-7.68 7.21a1.185 1.185 0 0 0 0 1.75l1.398 1.314a1.38 1.38 0 0 0 1.866 0l2.921-2.742V28.5a1 1 0 0 0 1 1h2.858a1 1 0 0 0 1-1V15.396z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
