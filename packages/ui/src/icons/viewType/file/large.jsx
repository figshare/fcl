import React, { PureComponent } from "react";


export default class ViewTypeFileLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="20"
        {...this.props}
        focusable={false}
        viewBox="0 0 20 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M0 9.5A.5.5 0 0 1 .5 9h19a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-17zm2 1a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5H2z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
