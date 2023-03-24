import React, { PureComponent } from "react";


export default class EyeInvisibleSmall extends PureComponent {
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
          d="M12.53 14.53a.75.75 0 1 0-1.06-1.06l-10 10a.75.75 0 1 0 1.06 1.06l10-10zM6.96 15c.644 0 1.245.068 1.804.186l-.75.75a4.007 4.007 0 0 0-1.033-.135c-1.987 0-3.598 1.437-3.598 3.209 0 .45.103.878.29 1.266l-1.285 1.286C.868 20.55 0 19.315 0 18.977 0 18.44 2.673 15 6.96 15z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M6.981 16.4c.18 0 .356.014.528.042l-3.33 3.329a2.35 2.35 0 0 1-.126-.76c0-1.443 1.311-2.612 2.928-2.612zM6.47 21.582l3.317-3.318c.08.236.122.487.122.746 0 1.442-1.311 2.611-2.928 2.611-.175 0-.345-.013-.511-.04z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M6.981 22.219c-.354 0-.695-.046-1.018-.13l-.716.715C5.797 22.928 6.382 23 7 23c4.7 0 7-3.407 7-4.023 0-.306-.801-1.562-2.344-2.582l-1.362 1.362c.184.385.285.808.285 1.253 0 1.772-1.61 3.209-3.598 3.209z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
