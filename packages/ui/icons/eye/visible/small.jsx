import React, { PureComponent } from "react";


export default class EyeVisibleSmall extends PureComponent {
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
          d="M14 18.977C14 19.593 11.7 23 7 23c-4.267 0-7-3.423-7-4.023C0 18.44 2.673 15 6.96 15c4.589 0 7.04 3.441 7.04 3.977zm-3.42.033c0-1.773-1.612-3.21-3.599-3.21s-3.598 1.438-3.598 3.21 1.61 3.209 3.598 3.209c1.987 0 3.598-1.437 3.598-3.21zM6.98 16.4c-1.617 0-2.928 1.168-2.928 2.61s1.311 2.611 2.928 2.611 2.928-1.169 2.928-2.61c0-1.443-1.312-2.612-2.928-2.612z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
