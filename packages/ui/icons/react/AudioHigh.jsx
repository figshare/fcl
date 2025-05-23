import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgAudioHigh = (props) => (
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
      d="M13.7166 14.0389C13.6012 14.141 13.5822 14.3165 13.6793 14.436L14.2069 15.0853C14.304 15.2048 14.4806 15.2229 14.5966 15.1217C18.3729 11.8291 18.3729 5.60839 14.5966 2.31585C14.4806 2.21464 14.304 2.23269 14.2069 2.35221L13.6793 3.00149C13.5822 3.12102 13.6012 3.29654 13.7166 3.39862C16.8072 6.13444 16.8072 11.3031 13.7166 14.0389Z"
      fill={props.color}
    />
    <path
      d="M1.39428 5.93013C0.464761 5.93013 0 6.39489 0 7.32442V10.113C0 11.0425 0.464761 11.5073 1.39428 11.5073H3.71809L7.91265 14.8629C8.09523 15.009 8.36571 14.879 8.36571 14.6452V2.79224C8.36571 2.55841 8.09523 2.42842 7.91265 2.57449L3.71809 5.93013H1.39428Z"
      fill={props.color}
    />
    <path
      d="M11.8134 12.5818C11.7141 12.4641 11.7298 12.2888 11.8407 12.1819C13.7131 10.3779 13.7131 7.0595 11.8407 5.25544C11.7298 5.14858 11.7141 4.97322 11.8134 4.85552L12.3529 4.21613C12.4522 4.09843 12.6289 4.08321 12.7415 4.18822C15.2719 6.54685 15.2719 10.8905 12.7415 13.2491C12.6289 13.3541 12.4522 13.3389 12.3529 13.2212L11.8134 12.5818Z"
      fill={props.color}
    />
    <path
      d="M9.93592 7.10876C10.27 7.52837 10.4565 8.10633 10.4565 8.71896C10.4565 9.33158 10.27 9.90954 9.93592 10.3292C9.84 10.4496 9.83267 10.6253 9.938 10.7376L10.5102 11.3479C10.6155 11.4603 10.793 11.4667 10.896 11.3522C11.5486 10.6278 11.8508 9.6534 11.8508 8.71896C11.8508 7.78452 11.5486 6.81016 10.896 6.08569C10.793 5.97126 10.6155 5.97764 10.5102 6.09L9.938 6.7003C9.83267 6.81266 9.84 6.98827 9.93592 7.10876Z"
      fill={props.color}
    />
  </svg>
);
SvgAudioHigh.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgAudioHigh.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgAudioHigh.displayName = "SvgAudioHigh";
const Memo = memo(SvgAudioHigh);
export default Memo;
