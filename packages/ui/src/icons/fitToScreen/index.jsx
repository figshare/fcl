import React, { PureComponent } from "react";


export default class FitToScreen extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="26"
        {...this.props}
        focusable={false}
        viewBox="0 0 26 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m14 23.52 1.08-.969c.2-.18.525-.18.726 0l.544.488c.2.18.2.47 0 .65l-2.987 2.676c-.2.18-.525.18-.726 0L9.65 23.69c-.2-.18-.2-.47 0-.65l.544-.488c.2-.18.525-.18.726 0l1.08.968v-3.436c0-.322.284-.583.636-.583h.727c.352 0 .637.261.637.583v3.437zM15.08 13.449 14 12.48v3.437c0 .322-.285.583-.637.583h-.727c-.351 0-.636-.261-.636-.583V12.48l-1.08.968c-.2.18-.525.18-.726 0l-.544-.488c-.2-.18-.2-.47 0-.65l2.987-2.676c.2-.18.525-.18.726 0l2.987 2.676c.2.18.2.47 0 .65l-.544.488c-.2.18-.525.18-.726 0z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M3 6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H3zm20 1H3a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
