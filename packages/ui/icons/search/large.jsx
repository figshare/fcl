import React, { PureComponent } from "react";


export default class SearchLarge extends PureComponent {
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
          d="m21.798 25.877-3.922-3.92c.961-1.5 1.354-3.406 1.354-5.32C19.23 11.314 14.96 7 9.637 7 4.315 6.999 0 11.4 0 16.722c0 5.324 4.315 9.508 9.637 9.508 1.915 0 3.82-.393 5.32-1.353l3.922 3.923a.692.692 0 0 0 .973 0l1.947-1.948a.691.691 0 0 0 0-.975zm-12.16-2.356c-3.795 0-6.884-3.133-6.884-6.928 0-3.793 3.09-6.883 6.883-6.883a6.892 6.892 0 0 1 6.884 6.883c0 3.795-3.088 6.928-6.884 6.928z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
