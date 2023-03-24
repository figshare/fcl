import React, { PureComponent } from "react";


export default class ReplaySmall extends PureComponent {
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
          d="M.512 13.51a.3.3 0 0 0-.512.212v3.803c0 .413.336.748.75.748h.75v.004h3.068a.3.3 0 0 0 .212-.513l-1.926-1.92A4.467 4.467 0 0 1 6 14.541c2.485 0 4.5 2.006 4.5 4.482 0 2.475-2.015 4.483-4.5 4.483a4.492 4.492 0 0 1-3.302-1.442.318.318 0 0 0-.456-.016l-.63.633a.29.29 0 0 0-.012.401A5.99 5.99 0 0 0 6 25c3.314 0 6-2.676 6-5.977s-2.687-5.977-6-5.977c-1.646 0-3.131.664-4.214 1.734L.512 13.51z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
