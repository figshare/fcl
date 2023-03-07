import React, { PureComponent } from "react";


export default class UserSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="10"
        {...this.props}
        focusable={false}
        viewBox="0 0 10 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M8.71 21.378s-.742-.209-1.946-.597c-.01-.191-.168-.449-.445-.449h-.391l.058-.765c.598-.257.865-.66.979-1.197.085-.404.182-.858.182-1.414 0-.55-.16-1.956-2.163-1.956h-.05c-1.793 0-2.072 1.373-2.072 1.955 0 .35.104 1.027.182 1.414.096.475.34.995.979 1.198l.057.765h-.391c-.278 0-.43.275-.446.467-1.165.405-2.082.633-2.082.633-.872.309-1.136.106-1.161.51v.688l.015.098a.377.377 0 0 0 .274.257c.029.006.058.015.09.015h9.23c.107 0 .2-.043.267-.113.102-.086.124-.257.124-.257v-.659a.336.336 0 0 0-.014-.073c-.095-.28-.355-.141-1.275-.52z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
