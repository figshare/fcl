import React, { PureComponent } from "react";


export default class Linkedin extends PureComponent {
  static name = "icons/Linkedin";

  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        preserveAspectRatio="xMidYMid meet"
        {...this.props}
        data-component={Linkedin.name}
        focusable={false}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M18.19 0H1.81C.81 0 0 .81 0 1.81v16.38C0 19.19.81 20 1.81 20h16.38c1 0 1.81-.81 1.81-1.81V1.81c0-1-.81-1.81-1.81-1.81zM6.19 17.27c0 .29-.236.526-.527.526h-2.24a.526.526 0 0 1-.527-.527V7.875c0-.291.235-.527.526-.527h2.241c.291 0 .527.236.527.527v9.394zM4.542 6.461a2.13 2.13 0 1 1 0-4.258 2.13 2.13 0 0 1 0 4.258zM17.9 17.312a.484.484 0 0 1-.484.484h-2.405a.484.484 0 0 1-.484-.484v-4.407c0-.657.193-2.88-1.718-2.88-1.482 0-1.783 1.521-1.843 2.204v5.083a.484.484 0 0 1-.484.484H8.157a.484.484 0 0 1-.484-.484v-9.48c0-.267.216-.484.484-.484h2.326c.267 0 .484.217.484.484v.82c.55-.825 1.366-1.462 3.105-1.462 3.851 0 3.829 3.598 3.829 5.575v4.547z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
