import React, { PureComponent } from "react";


export default class ChainUnlinked extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="21"
        {...this.props}
        focusable={false}
        viewBox="0 0 21 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M10.437 12.014a.5.5 0 0 0-.602.365l-.347 1.43a.5.5 0 0 0 .973.23l.346-1.43a.493.493 0 0 0-.37-.595zM7.817 15.034a.49.49 0 0 0-.129-.686l-1.228-.834a.504.504 0 0 0-.696.127.49.49 0 0 0 .129.686l1.228.834a.504.504 0 0 0 .696-.127zM11.33 24.692a.502.502 0 0 1-.652.272.491.491 0 0 1-.275-.643l.56-1.363a.502.502 0 0 1 .652-.272c.255.102.379.39.275.642l-.56 1.364zM13.728 22.365a.489.489 0 0 0 .023.697l1.088 1.006a.505.505 0 0 0 .707-.022.489.489 0 0 0-.023-.697l-1.088-1.007a.505.505 0 0 0-.707.023zM13.465 14.3c-1.612 0-2.93 1.33-2.93 2.96a.64.64 0 0 0 .18.454.625.625 0 0 0 1.076-.454c0-.949.736-1.692 1.674-1.692h4.605c.938 0 1.674.743 1.674 1.692 0 .948-.736 1.691-1.674 1.691h-4.396a.62.62 0 0 0-.45.183.638.638 0 0 0 0 .903c.12.12.282.185.45.183h4.396c1.612 0 2.93-1.331 2.93-2.96 0-1.63-1.318-2.96-2.93-2.96h-4.605zM2.93 16.273c-1.612 0-2.93 1.332-2.93 2.96 0 1.629 1.318 2.96 2.93 2.96h4.605c1.612 0 2.93-1.331 2.93-2.96a.638.638 0 0 0-.18-.454.622.622 0 0 0-.895 0 .637.637 0 0 0-.18.454c0 .948-.737 1.692-1.675 1.692H2.93a1.666 1.666 0 0 1-1.674-1.692c0-.948.736-1.691 1.674-1.691h4.395a.624.624 0 0 0 .45-.183.638.638 0 0 0 0-.903.624.624 0 0 0-.45-.183H2.93z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}