import React, { PureComponent } from "react";


export default class UndoMedium extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="19"
        {...this.props}
        focusable={false}
        viewBox="0 0 19 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M4.104 13.528v2.169c0 .219-.266.334-.432.188l-3.53-3.097a.414.414 0 0 1 0-.626l3.53-3.097c.166-.146.432-.03.432.188v2.17h6.908c4.412 0 7.988 3.487 7.988 7.788C19 23.513 15.424 27 11.012 27H2.895a.512.512 0 0 1-.518-.505V25.4c0-.279.232-.505.518-.505h8.117c3.22 0 5.83-2.545 5.83-5.684 0-3.139-2.61-5.683-5.83-5.683H4.104z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
