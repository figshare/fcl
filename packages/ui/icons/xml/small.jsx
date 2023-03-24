import React, { PureComponent } from "react";


export default class XMLSmall extends PureComponent {
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
          d="m2 19.506 1.293-1.566-1.172-1.434h.894l.759.964.743-.964h.885l-1.177 1.457 1.294 1.543h-.922l-.839-1.038-.842 1.038H2zM5.9 19.506v-3h1.144l.687 2.046.679-2.046h1.146v3h-.71v-2.361l-.75 2.36h-.737l-.748-2.36v2.36H5.9zM10.336 19.506V16.53h.764V19H13v.506h-2.664z"
        />
        <path
          clipRule="evenodd"
          d="M0 10a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V10zm1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5v-15z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
