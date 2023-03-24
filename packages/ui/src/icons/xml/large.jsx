import React, { PureComponent } from "react";


export default class XMLLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="25"
        {...this.props}
        focusable={false}
        viewBox="0 0 25 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          d="M3.333 20.51 5.49 17.9l-1.953-2.39h1.488l1.265 1.606 1.24-1.606h1.475l-1.962 2.428 2.156 2.572H7.662l-1.399-1.73-1.402 1.73H3.333zM9.835 20.51v-5h1.906l1.144 3.41 1.132-3.41h1.91v5h-1.183v-3.936l-1.252 3.936h-1.227l-1.247-3.936v3.936H9.835zM17.226 20.51v-4.96H18.5v4.117h3.167v.843h-4.44z"
        />
        <path
          clipRule="evenodd"
          d="M0 4.667C0 3.747.746 3 1.667 3h21.666C24.253 3 25 3.746 25 4.667v26.666c0 .92-.746 1.667-1.667 1.667H1.667C.747 33 0 32.254 0 31.333V4.667zm1.667.5a.5.5 0 0 1 .5-.5h20.666a.5.5 0 0 1 .5.5v25.666a.5.5 0 0 1-.5.5H2.167a.5.5 0 0 1-.5-.5V5.167z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
