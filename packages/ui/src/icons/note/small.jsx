import React, { PureComponent } from "react";


export default class NoteSmall extends PureComponent {
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
          d="M5.488 18.114s.763.022 1.393.375c.605.338.997.868.997.868l-2.953 2.005.563-3.248zM9.02 12.7l.595-.896c.4.065.87.184 1.284.416.448.25.828.61 1.114.93l-1.986 2.997-1.64 2.476c.003.002-.54-.612-1.014-.877-.493-.276-1.373-.472-1.388-.466L9.02 12.7zM10.376 10.654a1.476 1.476 0 0 1 1.953-.463c.69.386.863 1.179.448 1.806l-.236.356c-.28-.316-.65-.667-1.091-.913-.42-.235-.9-.36-1.308-.431l.234-.355z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M1.44 12.379h6.092l-.593.908h-5.5a.467.467 0 0 0-.48.454v10.897c0 .25.215.454.48.454h9.597c.265 0 .48-.203.48-.454V16.48l.96-1.47v9.628c0 .752-.645 1.362-1.44 1.362H1.439C.644 26 0 25.39 0 24.638V13.74c0-.753.644-1.362 1.44-1.362z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
