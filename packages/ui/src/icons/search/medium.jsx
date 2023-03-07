import React, { PureComponent } from "react";


export default class SearchMedium extends PureComponent {
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
          d="m15.853 23.729-2.852-2.852c.699-1.09.985-2.476.985-3.869 0-3.87-3.106-7.008-6.977-7.008C3.139 10 0 13.2 0 17.07c0 3.872 3.138 6.915 7.009 6.915 1.392 0 2.778-.285 3.869-.984l2.852 2.854a.503.503 0 0 0 .708 0l1.416-1.417a.503.503 0 0 0 0-.709zM7.01 22.015c-2.76 0-5.006-2.278-5.006-5.038a5.013 5.013 0 0 1 5.006-5.006 5.012 5.012 0 0 1 5.007 5.006c0 2.76-2.247 5.038-5.007 5.038z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
