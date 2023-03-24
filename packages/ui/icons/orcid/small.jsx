import React, { PureComponent } from "react";


export default class OrcidSmall extends PureComponent {
  static name = "icons/OrcidSmall";

  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        preserveAspectRatio="xMidYMid meet"
        {...this.props}
        data-component={OrcidSmall.name}
        focusable={false}
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 9C18 13.9711 13.9711 18 9 18C4.02891 18 0 13.9711 0 9C0 4.02891 4.02891 0 9 0C13.9711 0 18 4.02891 18 9Z"
          fill="#A6CE39"
        />
        <path
          d="M6.06792 13.092H4.98511V5.56152H6.06792V8.96465V13.092Z"
          fill="white"
        />
        <path
          d="M7.65698 5.56152H10.582C13.3664 5.56152 14.5898 7.55137 14.5898 9.33027C14.5898 11.2639 13.0781 13.099 10.596 13.099H7.65698V5.56152ZM8.73979 12.1217H10.4625C12.9164 12.1217 13.4789 10.2584 13.4789 9.33027C13.4789 7.81855 12.5156 6.53887 10.4062 6.53887H8.73979V12.1217Z"
          fill="white"
        />
        <path
          d="M6.23672 3.99336C6.23672 4.38008 5.92031 4.70352 5.52656 4.70352C5.13281 4.70352 4.81641 4.38008 4.81641 3.99336C4.81641 3.59961 5.13281 3.2832 5.52656 3.2832C5.92031 3.2832 6.23672 3.60664 6.23672 3.99336Z"
          fill="white"
        />
      </svg>
    );
  }
}
