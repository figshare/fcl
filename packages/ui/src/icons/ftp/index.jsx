import React, { PureComponent } from "react";


export default class FTP extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="30"
        {...this.props}
        focusable={false}
        viewBox="0 0 30 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M25.055 17.474h-.534c-.08-3.03-2.647-5.444-5.8-5.444-.722 0-1.417.129-2.112.386C14.71 9.206 10.46 8.05 7.12 9.848c-2.833 1.54-4.196 4.75-3.234 7.754-2.673.565-4.357 3.107-3.769 5.65C.598 25.433 2.603 27 4.928 27h20.154C27.808 27 30 24.869 30 22.224c0-2.593-2.218-4.724-4.945-4.75zm-10.718.899-.668.616a.3.3 0 0 1-.401 0l-1.096-1.002v4.256c0 .128-.134.257-.294.257h-.936c-.16 0-.294-.103-.294-.257v-4.281l-1.096 1.001a.3.3 0 0 1-.4 0l-.669-.616a.242.242 0 0 1 0-.36l2.727-2.516a.3.3 0 0 1 .4 0l2.727 2.516a.271.271 0 0 1 0 .386zm6.655 2.49-2.7 2.49a.3.3 0 0 1-.4 0l-2.7-2.516a.241.241 0 0 1 0-.359l.668-.616a.3.3 0 0 1 .401 0l1.096 1.001v-4.106c0-.129.134-.257.294-.257h.962c.16 0 .294.102.294.257v4.106l1.096-1.001a.3.3 0 0 1 .401 0l.669.616c.026.103.026.282-.08.385z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
