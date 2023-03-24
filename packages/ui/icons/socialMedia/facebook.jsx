import React, { PureComponent } from "react";


export default class Facebook extends PureComponent {
  static name = "icons/Facebook";

  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        preserveAspectRatio="xMidYMid meet"
        {...this.props}
        data-component={Facebook.name}
        focusable={false}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M17.305 0H2.695A2.695 2.695 0 0 0 0 2.695v14.61A2.695 2.695 0 0 0 2.695 20h7.206l.012-7.147H8.056a.438.438 0 0 1-.438-.436l-.009-2.304c0-.243.196-.44.438-.44h1.854V7.447c0-2.583 1.577-3.99 3.882-3.99h1.89c.243 0 .439.196.439.438v1.943a.438.438 0 0 1-.438.438h-1.16c-1.254 0-1.496.596-1.496 1.47v1.927h2.753c.263 0 .466.23.435.49l-.273 2.304a.438.438 0 0 1-.435.386H13.03L13.018 20h4.287A2.695 2.695 0 0 0 20 17.305V2.695A2.695 2.695 0 0 0 17.305 0z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
