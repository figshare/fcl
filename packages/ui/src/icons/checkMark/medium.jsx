import React, { PureComponent } from "react";


export default class CheckMarkMedium extends PureComponent {
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
          d="m3.335 15.848 3.06 3.035a.39.39 0 0 0 .55 0l7.72-7.657c.304-.301.795-.301 1.099 0l2.009 1.992c.303.3.303.789 0 1.09L7.219 24.773c-.304.301-.795.301-1.099 0L.228 18.93a.766.766 0 0 1 0-1.09l2.008-1.992c.304-.3.795-.3 1.099 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
