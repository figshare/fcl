import React, { PureComponent } from "react";


export default class CollapseLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="20"
        {...this.props}
        focusable={false}
        viewBox="0 0 20 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M19.555 8.562c.46-.345.583-1.044.277-1.56-.306-.518-.927-.658-1.387-.313L10 13.025 1.555 6.689c-.46-.345-1.08-.205-1.387.312-.306.517-.182 1.216.277 1.56L9.44 15.31a.917.917 0 0 0 1.12 0l8.995-6.747zM19.555 27.438c.46.345.583 1.044.277 1.56-.306.518-.927.658-1.387.313L10 22.975l-8.445 6.336c-.46.345-1.08.205-1.387-.312-.306-.517-.182-1.216.277-1.56L9.44 20.69a.917.917 0 0 1 1.12 0l8.995 6.747z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
