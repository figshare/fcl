import React, { PureComponent } from "react";


export default class VolumeLow extends PureComponent {
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
          d="M1.5 15.004c-1 0-1.5.5-1.5 1.5v3c0 1 .5 1.5 1.5 1.5H4l4.513 3.61A.3.3 0 0 0 9 24.379V11.628a.3.3 0 0 0-.487-.235L4 15.003H1.5zM10.69 16.271c.359.452.56 1.074.56 1.733s-.201 1.28-.56 1.732c-.104.13-.112.319.002.44l.615.656c.113.121.304.128.415.005.702-.78 1.027-1.828 1.027-2.833 0-1.006-.325-2.054-1.027-2.833a.281.281 0 0 0-.415.005l-.616.656c-.113.121-.105.31-.002.44z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
