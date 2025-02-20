import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgMenu = (props) => (
  <svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    focusable={false}
    aria-hidden={true}
    role="img"
    alt={props.title}
    {...props}
  >
    <path
      d="M0 4.19318C0 3.74131 0.366313 3.375 0.818182 3.375H17.1818C17.6337 3.375 18 3.74131 18 4.19318C18 4.64505 17.6337 5.01136 17.1818 5.01136H0.818182C0.366313 5.01136 0 4.64505 0 4.19318Z"
      fill={props.color}
    />
    <path
      d="M0 9.10227C0 8.6504 0.366313 8.28409 0.818182 8.28409H17.1818C17.6337 8.28409 18 8.6504 18 9.10227C18 9.55414 17.6337 9.92045 17.1818 9.92045H0.818182C0.366313 9.92045 0 9.55414 0 9.10227Z"
      fill={props.color}
    />
    <path
      d="M0.818182 13.1932C0.366313 13.1932 0 13.5595 0 14.0114C0 14.4632 0.366313 14.8295 0.818182 14.8295H17.1818C17.6337 14.8295 18 14.4632 18 14.0114C18 13.5595 17.6337 13.1932 17.1818 13.1932H0.818182Z"
      fill={props.color}
    />
  </svg>
);
SvgMenu.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgMenu.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgMenu.displayName = "SvgMenu";
const Memo = memo(SvgMenu);
export default Memo;
