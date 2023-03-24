import React, { PureComponent } from "react";


export default class VolumeMedium extends PureComponent {
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
          d="M0 16.503c0-1 .5-1.5 1.5-1.5H4l4.513-3.61a.3.3 0 0 1 .487.235v12.751a.3.3 0 0 1-.487.235L4 21.004H1.5c-1 0-1.5-.5-1.5-1.5v-3zM12.71 22.16a.316.316 0 0 1 .028-.43c2.015-1.942 2.015-5.512 0-7.452a.316.316 0 0 1-.029-.43l.58-.688a.289.289 0 0 1 .419-.03c2.722 2.537 2.722 7.21 0 9.748a.289.289 0 0 1-.418-.03l-.58-.688z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M10.69 16.271c.359.452.56 1.074.56 1.733s-.201 1.28-.56 1.732c-.104.13-.112.319.002.44l.615.656c.113.121.304.128.415.005.702-.78 1.027-1.828 1.027-2.833 0-1.006-.325-2.054-1.027-2.833a.281.281 0 0 0-.415.005l-.616.656c-.113.121-.105.31-.002.44z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
