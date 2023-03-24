import React, { PureComponent } from "react";


export default class EditLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="11"
        {...this.props}
        focusable={false}
        viewBox="0 0 11 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M2.543 23.376c-1.158-.471-2.454-.32-2.454-.32L0 29l4.46-4.323s-.805-.85-1.917-1.301zm2.848-12.628c-1.533 3.5-4.356 9.95-4.683 10.694.024-.015 1.564.115 2.47.483.873.355 1.952 1.316 1.946 1.313l4.679-10.686c-.57-.501-1.307-1.049-2.13-1.384-.761-.31-1.59-.404-2.282-.42zm4.16-3.564c-1.27-.517-2.64.095-3.177 1.319l-.303.692c.709.024 1.554.127 2.326.441.81.329 1.53.864 2.087 1.358l.304-.695c.535-1.225.033-2.598-1.237-3.115z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
