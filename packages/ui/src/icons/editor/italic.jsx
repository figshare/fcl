import React, { PureComponent } from "react";


export default class Italic extends PureComponent {

  static name = "icons/Italic";

  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        preserveAspectRatio="xMidYMid meet"
        {...this.props}
        data-component={Italic.name}
        focusable={false}
        viewBox="0 0 30 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12H21V13.0714H17.1103L13.9053 22.9286H18V24H9V22.9286H12.4038L15.6155 13.0714H12V12Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}

