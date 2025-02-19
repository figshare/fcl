import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgTextEditorQuote = (props) => (
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
      d="M8.07382 12.4956C8.07382 13.3907 7.72483 14.174 7.02685 14.8453C6.34228 15.5166 5.5302 15.8523 4.5906 15.8523C3.11409 15.8523 1.97987 15.3418 1.18792 14.3208C0.395973 13.2998 0 11.8872 0 10.083C0 8.40472 0.677852 6.71241 2.03356 5.00612C3.40268 3.29983 5.04698 2.00612 6.96644 1.125L7.85235 2.61451C6.33557 3.38374 5.14765 4.27885 4.28859 5.29983C3.42953 6.3208 2.93289 7.55857 2.79866 9.01311H3.92617C4.75839 9.01311 5.43624 9.11101 5.95973 9.30682C6.48322 9.50262 6.90604 9.77535 7.22819 10.125C7.53691 10.4607 7.75168 10.8313 7.87248 11.2369C8.00671 11.6425 8.07382 12.0621 8.07382 12.4956ZM18 12.4956C18 13.3907 17.651 14.174 16.953 14.8453C16.2685 15.5166 15.4564 15.8523 14.5168 15.8523C13.0403 15.8523 11.906 15.3418 11.1141 14.3208C10.3221 13.2998 9.92617 11.8872 9.92617 10.083C9.92617 8.40472 10.604 6.71241 11.9597 5.00612C13.3289 3.29983 14.9732 2.00612 16.8926 1.125L17.7785 2.61451C16.2617 3.38374 15.0738 4.27885 14.2148 5.29983C13.3557 6.3208 12.8591 7.55857 12.7248 9.01311H13.8523C14.6846 9.01311 15.3624 9.11101 15.8859 9.30682C16.4094 9.50262 16.8322 9.77535 17.1544 10.125C17.4631 10.4607 17.6779 10.8313 17.7987 11.2369C17.9329 11.6425 18 12.0621 18 12.4956Z"
      fill={props.color}
    />
  </svg>
);
SvgTextEditorQuote.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorQuote.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgTextEditorQuote.displayName = "SvgTextEditorQuote";
const Memo = memo(SvgTextEditorQuote);
export default Memo;
