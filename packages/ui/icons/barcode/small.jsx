import React, { PureComponent } from "react";


export default class BarcodeSmall extends PureComponent {
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
          d="M0.75 0C0.334375 0 0 0.334375 0 0.75V13.25C0 13.6656 0.334375 14 0.75 14H1.25C1.66563 14 2 13.6656 2 13.25V0.75C2 0.334375 1.66563 0 1.25 0H0.75ZM3.5 0C3.225 0 3 0.225 3 0.5V13.5C3 13.775 3.225 14 3.5 14C3.775 14 4 13.775 4 13.5V0.5C4 0.225 3.775 0 3.5 0ZM5.75 0C5.33437 0 5 0.334375 5 0.75V13.25C5 13.6656 5.33437 14 5.75 14H6.25C6.66563 14 7 13.6656 7 13.25V0.75C7 0.334375 6.66563 0 6.25 0H5.75ZM8.75 0C8.33437 0 8 0.334375 8 0.75V13.25C8 13.6656 8.33437 14 8.75 14H9.25C9.66563 14 10 13.6656 10 13.25V0.75C10 0.334375 9.66563 0 9.25 0H8.75ZM14 0.75V13.25C14 13.6656 14.3344 14 14.75 14H15.25C15.6656 14 16 13.6656 16 13.25V0.75C16 0.334375 15.6656 0 15.25 0H14.75C14.3344 0 14 0.334375 14 0.75ZM12 0.5V13.5C12 13.775 12.225 14 12.5 14C12.775 14 13 13.775 13 13.5V0.5C13 0.225 12.775 0 12.5 0C12.225 0 12 0.225 12 0.5Z" fill="inherit"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
