import React, { PureComponent } from "react";


export default class Dot extends PureComponent {
  static name = "icons/Dot";

  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        preserveAspectRatio="xMidYMid meet"
        {...this.props}
        data-component={Dot.name}
        focusable={false}
        viewBox="0 0 6 6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="3" r="3" />
      </svg>
    );
  }
}
