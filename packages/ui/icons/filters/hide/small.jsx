import React, { PureComponent } from "react";


export default class FiltersHideSmall extends PureComponent {
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
          d="M19.45 8.552a1 1 0 0 0-1.415 0L.553 26.034a1 1 0 1 0 1.414 1.414L14.13 15.285l3.66-3.659 1.66-1.66a1 1 0 0 0 0-1.414zM6.174 8.807a.727.727 0 0 0-.727.728v1.522H2.56a.75.75 0 0 0 0 1.5h2.887v1.523a.727.727 0 1 0 1.455 0V9.535a.727.727 0 0 0-.728-.728zM9.107 11.057h5.008l-1.5 1.5H9.107a.75.75 0 0 1 0-1.5zM2.56 17.058h5.555l-1.5 1.5H2.56a.75.75 0 0 1 0-1.5zM5.447 25.383v.697a.727.727 0 1 0 1.455 0v-2.152l-1.455 1.454zM12.72 20.08v-1.97l1.455-1.455v.402h2.886a.75.75 0 0 1 0 1.5h-2.886v1.523a.727.727 0 1 1-1.455 0zM9.107 23.058a.75.75 0 0 0 0 1.5h7.954a.75.75 0 0 0 0-1.5H9.107z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}
