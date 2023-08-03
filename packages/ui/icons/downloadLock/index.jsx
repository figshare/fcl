import React, { PureComponent } from "react";


export default class DownloadLock extends PureComponent {
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
        <path
          clipRule="evenodd"
          d="M9.21755 10.1818H9.63585V9.35065C9.63585 7.97352 10.7595 6.85714 12.1457 6.85714C13.5318 6.85714 14.6555 7.97352 14.6555 9.35065V10.1818H15.0738C15.5358 10.1818 15.9104 10.5539 15.9104 11.013V15.1688C15.9104 15.6279 15.5358 16 15.0738 16H9.21755C8.75551 16 8.38095 15.6279 8.38095 15.1688V11.013C8.38095 10.5539 8.75551 10.1818 9.21755 10.1818ZM13.6097 9.35065V10.1818H10.6816V9.35065C10.6816 8.54733 11.3371 7.8961 12.1457 7.8961C12.9542 7.8961 13.6097 8.54733 13.6097 9.35065ZM12.1457 14.3377C12.8387 14.3377 13.4006 13.7795 13.4006 13.0909C13.4006 12.4023 12.8387 11.8442 12.1457 11.8442C11.4526 11.8442 10.8908 12.4023 10.8908 13.0909C10.8908 13.7795 11.4526 14.3377 12.1457 14.3377Z"
          fillRule="evenodd"
        />
        <path d="M7 10.6667H2.02381C1.74767 10.6667 1.52381 10.4428 1.52381 10.1667V9.14286C1.52381 8.72207 1.18269 8.38095 0.761905 8.38095C0.341116 8.38095 0 8.72207 0 9.14286V10.6667C0 11.5048 0.685714 12.1905 1.52381 12.1905H7V10.6667Z" />
        <path d="M9.3671 4.79567C9.66404 5.09261 9.66404 5.57405 9.3671 5.871L6.09524 9.14286L2.82338 5.871C2.52643 5.57405 2.52643 5.09261 2.82338 4.79567C3.11991 4.49913 3.60055 4.49867 3.89766 4.79463L5.33333 6.22476V0.761905C5.33333 0.341117 5.67445 0 6.09524 0C6.51603 0 6.85714 0.341117 6.85714 0.761905V6.22476L8.29282 4.79463C8.58993 4.49867 9.07056 4.49913 9.3671 4.79567Z" />
      </svg>
    );
  }
}
