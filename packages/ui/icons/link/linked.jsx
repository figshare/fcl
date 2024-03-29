import React, { PureComponent } from "react";


export default class LinkLinked extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="15"
        {...this.props}
        focusable={false}
        viewBox="0 0 15 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1.087 20.167c-1.14 1.14-1.118 3.026.05 4.193 1.166 1.167 3.052 1.19 4.192.05l3.256-3.256c1.14-1.14 1.118-3.027-.049-4.194a.65.65 0 0 0-.453-.198.618.618 0 0 0-.633.633.65.65 0 0 0 .198.453c.68.68.692 1.733.028 2.396L4.42 23.5c-.663.664-1.716.652-2.396-.028-.68-.68-.692-1.732-.028-2.396l3.108-3.108a.62.62 0 0 0 .187-.449.65.65 0 0 0-.647-.647.62.62 0 0 0-.45.187l-3.107 3.108zm5.328-5.328c-1.14 1.14-1.118 3.026.05 4.193.119.123.282.194.452.198a.622.622 0 0 0 .633-.633.653.653 0 0 0-.198-.453c-.68-.68-.692-1.732-.028-2.396l3.256-3.256c.664-.664 1.717-.651 2.396.028.68.68.692 1.733.028 2.396l-3.108 3.108a.616.616 0 0 0-.187.45.651.651 0 0 0 .647.646.62.62 0 0 0 .45-.187l3.107-3.107c1.14-1.14 1.118-3.027-.049-4.194-1.167-1.167-3.053-1.19-4.193-.049l-3.256 3.256z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
