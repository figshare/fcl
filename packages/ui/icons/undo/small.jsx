import React, { PureComponent } from "react";


export default class UndoSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="13"
        {...this.props}
        focusable={false}
        viewBox="0 0 13 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M2.808 15.018v1.447c0 .145-.182.222-.296.125L.098 14.525a.271.271 0 0 1 0-.417l2.414-2.064c.114-.098.296-.021.296.125v1.446h4.727c3.018 0 5.465 2.325 5.465 5.193C13 21.675 10.553 24 7.535 24H1.98a.346.346 0 0 1-.355-.337v-.73c0-.186.16-.336.355-.336h5.554c2.202 0 3.988-1.697 3.988-3.79 0-2.092-1.786-3.789-3.988-3.789H2.808z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
