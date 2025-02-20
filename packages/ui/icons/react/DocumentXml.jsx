import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgDocumentXml = (props) => (
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
      d="M3.125 10.5059L4.41836 8.94043L3.24633 7.50586H4.13955L4.89853 8.46973L5.64201 7.50586H6.52749L5.3503 8.96289L6.64366 10.5059H5.72205L4.88304 9.46826L4.04145 10.5059H3.125Z"
      fill={props.color}
    />
    <path
      d="M7.02573 10.5059V7.50586H8.16936L8.85605 9.55225L9.535 7.50586H10.6812V10.5059H9.97128V8.14453L9.22005 10.5059H8.48431L7.73566 8.14453V10.5059H7.02573Z"
      fill={props.color}
    />
    <path
      d="M11.4608 10.5059V7.53027H12.225V10.0005H14.125V10.5059H11.4608Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.125 1C1.125 0.447754 1.57272 0 2.125 0H15.125C15.6773 0 16.125 0.447754 16.125 1V17C16.125 17.5522 15.6773 18 15.125 18H2.125C1.57272 18 1.125 17.5522 1.125 17V1ZM2.125 1.5C2.125 1.22386 2.34886 1 2.625 1H14.625C14.9011 1 15.125 1.22386 15.125 1.5V16.5C15.125 16.7761 14.9011 17 14.625 17H2.625C2.34886 17 2.125 16.7761 2.125 16.5V1.5Z"
      fill={props.color}
    />
  </svg>
);
SvgDocumentXml.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDocumentXml.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgDocumentXml.displayName = "SvgDocumentXml";
const Memo = memo(SvgDocumentXml);
export default Memo;
