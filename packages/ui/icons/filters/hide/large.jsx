import React, { PureComponent } from "react";


export default class FiltersHideLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="26"
        {...this.props}
        focusable={false}
        viewBox="0 0 26 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M25.381 5.703a1 1 0 0 0-1.414 0L.633 29.038a1 1 0 1 0 1.414 1.414L14.86 17.638l3.53-3.529 5-5 1.991-1.992a1 1 0 0 0 0-1.414zM7.926 5.996a1 1 0 0 0-1 1v2h-4a1 1 0 1 0 0 2h4v2a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1zM11.926 8.996h5.92l-2 2h-3.92a1 1 0 1 1 0-2zM2.926 16.996h6.92l-2 2h-4.92a1 1 0 1 1 0-2zM6.926 28.401v.595a1 1 0 1 0 2 0V26.4l-2 2zM16.926 20.996V18.4l2-2v.595h4a1 1 0 0 1 0 2h-4v2a1 1 0 1 1-2 0zM11.926 24.996a1 1 0 0 0 0 2h11a1 1 0 1 0 0-2h-11z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
