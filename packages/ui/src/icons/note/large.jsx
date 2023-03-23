import React, { PureComponent } from "react";


export default class NoteLarge extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        height="36"
        preserveAspectRatio="xMidYMid meet"
        width="27"
        {...this.props}
        focusable={false}
        viewBox="0 0 27 36"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M11.518 18.236s1.495.045 2.728.772c1.184.697 1.952 1.791 1.952 1.791l-5.781 4.135 1.101-6.698zM18.436 7.07l1.163-1.849c.782.135 1.705.38 2.516.858.877.516 1.62 1.259 2.18 1.92l-3.888 6.18-3.213 5.107c.006.003-1.054-1.263-1.984-1.81-.965-.569-2.688-.974-2.719-.96l5.945-9.446zM21.091 2.85c.814-1.293 2.471-1.753 3.823-.957 1.353.797 1.69 2.432.878 3.726l-.462.734c-.548-.65-1.274-1.376-2.137-1.884-.822-.484-1.762-.743-2.562-.888l.46-.731z"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M3.59 6.406h11.93l-1.16 1.873H3.59c-.519 0-.94.419-.94.936v22.476c0 .517.421.936.94.936h18.792c.52 0 .94-.42.94-.936V14.864l1.879-3.03V31.69a2.814 2.814 0 0 1-2.819 2.809H3.59a2.814 2.814 0 0 1-2.819-2.81V9.216a2.814 2.814 0 0 1 2.82-2.81z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
