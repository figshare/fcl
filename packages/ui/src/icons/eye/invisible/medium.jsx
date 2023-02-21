import React, { PureComponent } from "react";


export default class EyeInvisibleMedium extends PureComponent {
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
          d="M17.884 11.884a1.25 1.25 0 0 0-1.768-1.768l-14 14a1.25 1.25 0 0 0 1.768 1.768l14-14zM9.943 12c.925 0 1.79.103 2.593.282l-1.113 1.113a5.47 5.47 0 0 0-1.45-.194c-2.84 0-5.14 2.155-5.14 4.814 0 .582.11 1.14.312 1.657l-1.988 1.989C1.143 20.179 0 18.452 0 17.965 0 17.161 3.819 12 9.943 12z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M9.973 14.099c.236 0 .467.018.693.053L5.9 18.916a3.69 3.69 0 0 1-.11-.9c0-2.164 1.872-3.917 4.182-3.917zM9.3 21.882l4.749-4.749c.07.284.106.58.106.882 0 2.163-1.872 3.917-4.182 3.917-.23 0-.454-.017-.673-.05z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M9.973 22.828a5.47 5.47 0 0 1-1.43-.188L7.48 23.702C8.27 23.89 9.112 24 10 24c6.713 0 10-5.111 10-6.035 0-.441-1.056-2.197-3.093-3.69l-2.1 2.1c.198.512.306 1.064.306 1.64 0 2.658-2.301 4.813-5.14 4.813z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
