import React, { PureComponent } from "react";


export default class EditSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="5"
        {...this.props}
        focusable={false}
        viewBox="0 0 5 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1.156 20.444c-.526-.215-1.115-.145-1.115-.145L0 23l2.027-1.965s-.366-.386-.871-.591zm1.294-5.74-2.128 4.86c.01-.006.71.053 1.123.22.397.161.887.598.884.597l2.127-4.857c-.259-.228-.594-.477-.968-.63a2.977 2.977 0 0 0-1.038-.19zm1.891-1.62a1.11 1.11 0 0 0-1.444.6l-.138.314c.323.01.707.057 1.058.2.368.15.695.393.948.617l.139-.316c.243-.556.015-1.18-.563-1.415z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
