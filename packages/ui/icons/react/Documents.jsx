import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDocuments = (props) => (
  <svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    width={props.width ?? props.inline ? "1em" : "100%"}
    focusable={false}
    aria-hidden={true}
    role="img"
    alt={props.title}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.21591 0C4.76404 0 4.39773 0.366313 4.39773 0.818182V13.9091C4.39773 14.361 4.76404 14.7273 5.21591 14.7273H15.034C15.4859 14.7273 15.8522 14.361 15.8522 13.9091V0.818182C15.8522 0.366313 15.4859 0 15.034 0H5.21591ZM6.4433 3.27273C6.21736 3.27273 6.03421 3.45588 6.03421 3.68182C6.03421 3.90775 6.21736 4.09091 6.4433 4.09091H13.8069C14.0328 4.09091 14.216 3.90775 14.216 3.68182C14.216 3.45588 14.0328 3.27273 13.8069 3.27273H6.4433ZM6.03421 6.13636C6.03421 5.91043 6.21736 5.72727 6.4433 5.72727H13.8069C14.0328 5.72727 14.216 5.91043 14.216 6.13636C14.216 6.3623 14.0328 6.54545 13.8069 6.54545H6.4433C6.21736 6.54545 6.03421 6.3623 6.03421 6.13636ZM6.4433 8.18182C6.21736 8.18182 6.03421 8.36497 6.03421 8.59091C6.03421 8.81684 6.21736 9 6.4433 9H13.8069C14.0328 9 14.216 8.81684 14.216 8.59091C14.216 8.36497 14.0328 8.18182 13.8069 8.18182H6.4433ZM6.03421 11.0455C6.03421 10.8195 6.21736 10.6364 6.4433 10.6364H13.8069C14.0328 10.6364 14.216 10.8195 14.216 11.0455C14.216 11.2714 14.0328 11.4545 13.8069 11.4545H6.4433C6.21736 11.4545 6.03421 11.2714 6.03421 11.0455Z"
      fill={props.color}
    />
    <path
      d="M3.5796 0.818182V14.7273C3.5796 15.1791 3.94592 15.5455 4.39779 15.5455L15.034 15.5455C15.034 15.9973 14.6677 16.3636 14.2158 16.3636H3.57954C3.12768 16.3636 2.76136 15.9973 2.76136 15.5455V1.63636C2.76136 1.18449 3.12773 0.818182 3.5796 0.818182Z"
      fill={props.color}
    />
    <path
      d="M1.9432 2.45455V16.3636C1.9432 16.8155 2.30951 17.1818 2.76138 17.1818L13.3976 17.1818C13.3976 17.6337 13.0313 18 12.5795 18H1.94318C1.49131 18 1.125 17.6337 1.125 17.1818V3.27273C1.125 2.82086 1.49133 2.45455 1.9432 2.45455Z"
      fill={props.color}
    />
  </svg>
);
SvgDocuments.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgDocuments.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgDocuments.displayName = "SvgDocuments";
const Memo = memo(SvgDocuments);
export default Memo;
