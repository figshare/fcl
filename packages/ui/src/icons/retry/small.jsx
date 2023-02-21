import React, { PureComponent } from "react";


export default class RetrySmall extends PureComponent {
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
          d="M11.488 13.51a.3.3 0 0 1 .512.212v3.803a.749.749 0 0 1-.75.748h-.75v.004H7.432a.3.3 0 0 1-.212-.513l1.926-1.92A4.467 4.467 0 0 0 6 14.541c-2.485 0-4.5 2.006-4.5 4.482 0 2.475 2.015 4.483 4.5 4.483 1.306 0 2.48-.556 3.302-1.442a.318.318 0 0 1 .456-.016l.63.633a.29.29 0 0 1 .012.401A5.99 5.99 0 0 1 6 25c-3.314 0-6-2.676-6-5.977s2.687-5.977 6-5.977c1.646 0 3.131.664 4.213 1.734l1.275-1.27z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
