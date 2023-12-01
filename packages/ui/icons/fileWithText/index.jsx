import React, { PureComponent } from "react";


export default class FileWithText extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="16"
        preserveAspectRatio="xMidYMid meet"
        width="16"
        {...this.props}
        focusable={false}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 14.5C3.725 14.5 3.5 14.275 3.5 14V2C3.5 1.725 3.725 1.5 4 1.5H9V4C9 4.55312 9.44688 5 10 5H12.5V14C12.5 14.275 12.275 14.5 12 14.5H4ZM4 0C2.89688 0 2 0.896875 2 2V14C2 15.1031 2.89688 16 4 16H12C13.1031 16 14 15.1031 14 14V4.82812C14 4.29688 13.7906 3.7875 13.4156 3.4125L10.5844 0.584375C10.2094 0.209375 9.70312 0 9.17188 0H4ZM5.75 8C5.33437 8 5 8.33438 5 8.75C5 9.16562 5.33437 9.5 5.75 9.5H10.25C10.6656 9.5 11 9.16562 11 8.75C11 8.33438 10.6656 8 10.25 8H5.75ZM5.75 11C5.33437 11 5 11.3344 5 11.75C5 12.1656 5.33437 12.5 5.75 12.5H10.25C10.6656 12.5 11 12.1656 11 11.75C11 11.3344 10.6656 11 10.25 11H5.75Z" />
      </svg>
    );
  }
}
