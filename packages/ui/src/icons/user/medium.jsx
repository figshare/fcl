import React, { PureComponent } from "react";


export default class UserMedium extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="14"
        {...this.props}
        focusable={false}
        viewBox="0 0 14 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M12.195 22.068s-1.04-.315-2.725-.896c-.016-.287-.236-.674-.624-.674h-.547l.08-1.148c.839-.385 1.213-.99 1.372-1.796.12-.604.255-1.286.255-2.12 0-.824-.225-2.934-3.028-2.934H6.907c-2.509 0-2.9 2.06-2.9 2.933 0 .525.145 1.54.254 2.12.135.713.477 1.493 1.37 1.797l.08 1.148h-.546c-.389 0-.603.413-.625.7-1.63.608-2.915.95-2.915.95-1.22.463-1.59.16-1.625.764v1.033l.021.147c.021.08.062.148.11.21.07.089.163.146.273.175.041.01.082.023.127.023h12.921c.15 0 .28-.064.374-.17.143-.129.174-.385.174-.385v-.988a.536.536 0 0 0-.02-.11c-.132-.42-.497-.212-1.785-.78z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
