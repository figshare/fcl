import React, { PureComponent } from "react";


export default class ChainLinked extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="18"
        {...this.props}
        focusable={false}
        viewBox="0 0 18 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M2.93 15C1.318 15 0 16.35 0 18s1.318 3 2.93 3h4.605c1.612 0 2.93-1.35 2.93-3a.65.65 0 0 0-.18-.46.618.618 0 0 0-.895 0 .65.65 0 0 0-.18.46c0 .96-.737 1.714-1.675 1.714H2.93c-.938 0-1.674-.753-1.674-1.714 0-.96.736-1.714 1.674-1.714h4.396a.62.62 0 0 0 .45-.185.65.65 0 0 0 0-.916.62.62 0 0 0-.45-.185H2.93zm7.535 0c-1.612 0-2.93 1.35-2.93 3a.653.653 0 0 0 .18.46.621.621 0 0 0 .895 0 .653.653 0 0 0 .18-.46c0-.96.737-1.714 1.675-1.714h4.605c.938 0 1.674.753 1.674 1.714 0 .96-.736 1.714-1.674 1.714h-4.396a.617.617 0 0 0-.45.185.651.651 0 0 0 0 .915c.12.122.282.188.45.186h4.396c1.612 0 2.93-1.35 2.93-3s-1.318-3-2.93-3h-4.605z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
