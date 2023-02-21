import React, { PureComponent } from "react";


export default class Orcid extends PureComponent {
  static name = "icons/Orcid";

  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        preserveAspectRatio="xMidYMid meet"
        {...this.props}
        data-component={Orcid.name}
        focusable={false}
        viewBox="0 0 59 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.241 3.957C2.868 3.957 0 7.187 0 10.979 0 14.69 2.789 18 7.202 18c4.571 0 7.302-3.33 7.302-7.022 0-3.811-2.81-7.022-7.263-7.022zm27.217 0c-4.294 0-7.4 3.05-7.4 7.222 0 2.87 2.216 6.822 7.282 6.822 2.117 0 3.56-.502 4.887-1.204V14.65c-1.524 1.003-3.185 1.545-4.71 1.545-3.245 0-5.461-2.127-5.461-5.196 0-3.01 2.295-5.237 5.382-5.237 1.564 0 2.988.442 4.65 1.425V5.08c-1.84-.781-3.245-1.123-4.63-1.123zm-17.767.18V17.82h1.939v-5.938h.812c.988 0 1.8.321 3.581 3.13l1.78 2.808h2.315c-.929-1.303-1.266-1.765-1.84-2.708-1.028-1.706-1.78-2.97-3.007-3.793 1.444-.58 2.255-1.764 2.255-3.349 0-2.368-1.701-3.833-4.432-3.833h-3.403zm-9.45 1.625c3.028 0 5.265 2.208 5.265 5.217 0 2.989-2.237 5.216-5.265 5.216-3.008 0-5.243-2.227-5.243-5.216 0-3.01 2.235-5.217 5.243-5.217zm11.389.061h1.246c1.88 0 2.632.783 2.652 2.066.02 1.144-.574 2.227-2.652 2.227H18.63V5.823z"
          fill="#A7A9AC"
        />
        <path
          d="M42.9 0c-.699 0-1.271.58-1.271 1.289S42.2 2.578 42.9 2.578s1.272-.58 1.272-1.29C44.172.58 43.599 0 42.9 0zm-.97 4.137V17.82h1.94V4.137h-1.94zm4.643 0V17.82h5.263c4.453 0 7.163-3.33 7.163-6.842 0-3.23-2.196-6.84-7.182-6.84h-5.244zm1.94 1.766H51.5c3.779 0 5.501 2.327 5.501 5.075 0 1.686-1.01 5.076-5.402 5.076h-3.087V5.903z"
          fill="#A6CE39"
        />
      </svg>
    );
  }
}
