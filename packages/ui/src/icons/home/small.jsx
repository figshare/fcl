import React, { PureComponent } from "react";


export default class HomeSmall extends PureComponent {
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
          d="M.258 18.38c-.238 0-.349-.29-.169-.443l5.742-4.875a.261.261 0 0 1 .337 0l5.743 4.875c.18.153.07.442-.169.442h-1.626a.255.255 0 0 0-.257.252v3.949c0 .232-.192.42-.429.42H7.715a.425.425 0 0 1-.429-.42v-2.52a.425.425 0 0 0-.428-.42H5.142a.425.425 0 0 0-.428.42v2.52c0 .232-.192.42-.43.42H2.57a.425.425 0 0 1-.43-.42V18.63a.255.255 0 0 0-.256-.252H.258z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
