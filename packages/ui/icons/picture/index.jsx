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
        <path d="M4 14.5C3.725 14.5 3.5 14.275 3.5 14V2C3.5 1.725 3.725 1.5 4 1.5H9V4C9 4.55312 9.44688 5 10 5H12.5V14C12.5 14.275 12.275 14.5 12 14.5H4ZM4 0C2.89688 0 2 0.896875 2 2V14C2 15.1031 2.89688 16 4 16H12C13.1031 16 14 15.1031 14 14V4.82812C14 4.29688 13.7906 3.7875 13.4156 3.4125L10.5844 0.584375C10.2094 0.209375 9.70312 0 9.17188 0H4ZM7 8C7 7.73478 6.89464 7.48043 6.70711 7.29289C6.51957 7.10536 6.26522 7 6 7C5.73478 7 5.48043 7.10536 5.29289 7.29289C5.10536 7.48043 5 7.73478 5 8C5 8.26522 5.10536 8.51957 5.29289 8.70711C5.48043 8.89464 5.73478 9 6 9C6.26522 9 6.51957 8.89464 6.70711 8.70711C6.89464 8.51957 7 8.26522 7 8ZM9.1625 9.46562C9.06875 9.33125 8.91563 9.25 8.75 9.25C8.58437 9.25 8.43125 9.33125 8.3375 9.46562L7.04688 11.3313L6.675 10.7344C6.58438 10.5875 6.42188 10.5 6.25 10.5C6.07812 10.5 5.91875 10.5875 5.825 10.7344L4.575 12.7344C4.47813 12.8875 4.475 13.0813 4.5625 13.2406C4.65 13.4 4.81875 13.4969 5 13.4969H6.5H7.5H8.75H11C11.1875 13.4969 11.3563 13.3937 11.4438 13.2281C11.5312 13.0625 11.5188 12.8656 11.4125 12.7125L9.1625 9.4625V9.46562Z" />
      </svg>
    );
  }
}