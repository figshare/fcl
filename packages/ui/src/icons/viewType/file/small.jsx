import React, { PureComponent } from "react";


export default class ViewTypeFileSmall extends PureComponent {
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
          d="M0 11.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-13zm2 1a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V13a.5.5 0 0 0-.5-.5H2z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
