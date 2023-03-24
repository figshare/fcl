import React, { PureComponent } from "react";


export default class HomeLarge extends PureComponent {
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
          d="M.473 18.22c-.437 0-.64-.55-.31-.84l10.528-9.263a.466.466 0 0 1 .618 0l10.527 9.263c.33.29.128.84-.309.84h-2.98a.475.475 0 0 0-.472.48v7.502c0 .44-.352.798-.786.798h-3.145a.792.792 0 0 1-.786-.798v-4.789a.792.792 0 0 0-.786-.798H9.428a.792.792 0 0 0-.786.798v4.789c0 .44-.352.798-.786.798H4.71a.792.792 0 0 1-.786-.798V18.7a.475.475 0 0 0-.472-.48H.473z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
