import React, { PureComponent } from "react";


export default class FiltersShowSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="16"
        {...this.props}
        focusable={false}
        viewBox="0 0 16 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M3.637 9.727a.727.727 0 0 1 1.454 0v4.546a.727.727 0 1 1-1.454 0V12.75H.75a.75.75 0 0 1 0-1.5h2.887V9.727zM6.546 12a.75.75 0 0 1 .75-.75h7.955a.75.75 0 0 1 0 1.5H7.296a.75.75 0 0 1-.75-.75zM.75 17.25a.75.75 0 0 0 0 1.5h7.955a.75.75 0 0 0 0-1.5H.75zM12.364 17.25v-1.523a.727.727 0 0 0-1.454 0v4.546a.727.727 0 1 0 1.454 0V18.75h2.886a.75.75 0 0 0 0-1.5h-2.886zM0 24a.75.75 0 0 1 .75-.75h2.887v-1.523a.727.727 0 1 1 1.454 0v4.546a.727.727 0 1 1-1.454 0V24.75H.75A.75.75 0 0 1 0 24zM7.296 23.25a.75.75 0 0 0 0 1.5h7.955a.75.75 0 0 0 0-1.5H7.296z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
