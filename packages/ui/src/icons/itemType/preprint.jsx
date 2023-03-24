import React, { PureComponent } from "react";


export default class ItemTypePreprint extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="24"
        preserveAspectRatio="xMidYMid meet"
        width="40"
        {...this.props}
        focusable={false}
        viewBox="0 0 40 24"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M2.667 0A2.667 2.667 0 0 0 0 2.667v18.666A2.667 2.667 0 0 0 2.667 24h34.666A2.667 2.667 0 0 0 40 21.333V2.667A2.667 2.667 0 0 0 37.333 0H2.667zm6.585 6.988-4.248.992a.67.67 0 0 0-.505.807.681.681 0 0 0 .82.5l4.079-.953 3.528.948c.11.03.224.031.335.006l4.095-.951 3.579.945a.68.68 0 0 0 .834-.475.67.67 0 0 0-.482-.822l-3.744-.99a.678.678 0 0 0-.332-.005l-4.095.95-3.53-.946a.689.689 0 0 0-.334-.006zm0 4.848-4.248.99a.67.67 0 0 0-.505.808.681.681 0 0 0 .82.5l4.079-.953 3.528.947a.679.679 0 0 0 .834-.471.67.67 0 0 0-.478-.825l-3.695-.991a.69.69 0 0 0-.335-.005zm11.681 7.14a.687.687 0 0 0 .818-.418l4.402-1.232-3.242-3.179-1.154 3.963a.676.676 0 0 0-.469-.432l-3.744-.99a.679.679 0 0 0-.332-.005l-4.094.95-3.53-.946a.689.689 0 0 0-.335-.006l-4.248.991a.671.671 0 0 0-.506.809.682.682 0 0 0 .82.5l4.079-.953 3.526.949c.11.03.225.03.335.005l4.096-.95 3.578.945zm2.427-5.27 3.242 3.177 7.132-6.99-3.242-3.178-7.132 6.99zm10.869-4.3.971-.954c.357-.349.376-.9.04-1.23l-2.025-1.986c-.337-.33-.899-.312-1.257.039l-.972.953 3.243 3.178z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
