import React, { PureComponent } from "react";


export default class XMLMedium extends PureComponent {
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
          d="M2.667 20.008 4.39 17.92l-1.563-1.913H4.02l1.012 1.285.992-1.285h1.18l-1.57 1.943 1.725 2.057H6.13l-1.118-1.384-1.122 1.384H2.667zM7.868 20.008v-4h1.524l.916 2.728.905-2.728h1.529v4h-.947v-3.149l-1.002 3.149h-.98l-.999-3.149v3.149h-.946zM13.781 20.008V16.04H14.8v3.294h2.533v.674h-3.552z"
        />
        <path
          clipRule="evenodd"
          d="M0 7.333C0 6.597.597 6 1.333 6h17.334C19.403 6 20 6.597 20 7.333v21.334c0 .736-.597 1.333-1.333 1.333H1.333A1.333 1.333 0 0 1 0 28.667V7.333zm1.333.5a.5.5 0 0 1 .5-.5h16.334a.5.5 0 0 1 .5.5v20.334a.5.5 0 0 1-.5.5H1.833a.5.5 0 0 1-.5-.5V7.833z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
