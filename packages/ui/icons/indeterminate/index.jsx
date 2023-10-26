import React, { PureComponent } from "react";


export default class Indeterminate extends PureComponent {
  render() {
    return (
      <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_12928_39741)">
          <rect fill="white" height="18" rx="3" width="18" />
          <path d="M4 8.5C4 8.22386 4.22386 8 4.5 8H13.5C13.7761 8 14 8.22386 14 8.5V9.5C14 9.77614 13.7761 10 13.5 10H4.5C4.22386 10 4 9.77614 4 9.5V8.5Z" fill="#525252" />
          <path clipRule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H15C16.6569 0 18 1.34315 18 3V15C18 16.6569 16.6569 18 15 18H3C1.34315 18 0 16.6569 0 15V3ZM3 1H15C16.1046 1 17 1.89543 17 3V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1Z" fill="#525252" fillRule="evenodd" />
        </g>
        <defs>
          <clipPath id="clip0_12928_39741">
            <rect fill="white" height="18" rx="3" width="18" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}
