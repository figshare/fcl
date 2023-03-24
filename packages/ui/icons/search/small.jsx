import React, { PureComponent } from "react";


export default class SearchSmall extends PureComponent {
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
          d="m9.908 22.08-1.783-1.782c.437-.681.616-1.548.616-2.418 0-2.418-1.94-4.38-4.36-4.38C1.96 13.5 0 15.5 0 17.92s1.961 4.32 4.38 4.32c.87 0 1.737-.178 2.419-.614l1.782 1.783c.122.121.321.121.443 0l.885-.885a.314.314 0 0 0 0-.443zm-5.527-1.07c-1.725 0-3.129-1.425-3.129-3.15a3.133 3.133 0 0 1 3.129-3.128A3.133 3.133 0 0 1 7.51 17.86c0 1.724-1.404 3.148-3.13 3.148z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
