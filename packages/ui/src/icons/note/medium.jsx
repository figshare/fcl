import React, { PureComponent } from "react";


export default class NoteMedium extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="19"
        {...this.props}
        focusable={false}
        viewBox="0 0 19 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M8.021 18.171s1.115.034 2.036.562c.883.507 1.457 1.303 1.457 1.303l-4.315 3.007.822-4.872zM13.184 10.051l.868-1.345c.584.098 1.273.277 1.878.624.654.376 1.21.915 1.627 1.396l-2.902 4.495-2.398 3.714c.005.003-.787-.918-1.48-1.316-.72-.414-2.007-.709-2.03-.698l4.437-6.87zM15.165 6.982a2.124 2.124 0 0 1 2.854-.696c1.01.58 1.262 1.769.655 2.71l-.345.534c-.41-.474-.95-1.001-1.595-1.37-.613-.353-1.315-.54-1.912-.646l.344-.532z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M2.104 9.568h8.904l-.867 1.362H2.104a.691.691 0 0 0-.701.681v16.346c0 .376.314.68.7.68H16.13a.691.691 0 0 0 .701-.68V15.719l1.403-2.204v14.442c0 1.128-.942 2.043-2.104 2.043H2.104C.942 30 0 29.085 0 27.957V11.61c0-1.128.942-2.043 2.104-2.043z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
