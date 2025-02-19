import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgSettingsSmall = (props) => (
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
      d="M8.14118 0C7.6678 0 7.28404 0.383756 7.28404 0.857143V2.35889C6.655 2.52079 6.06089 2.76971 5.51532 3.09205L4.4535 2.03023C4.11877 1.6955 3.57606 1.6955 3.24132 2.03023L2.02914 3.24242C1.6944 3.57715 1.6944 4.11987 2.02914 4.4546L3.0908 5.51626C2.76826 6.06204 2.51919 6.65639 2.35721 7.28571H0.857143C0.383756 7.28571 0 7.66947 0 8.14286V9.85714C0 10.3305 0.383756 10.7143 0.857143 10.7143H2.35721C2.51922 11.3437 2.76836 11.9382 3.09099 12.4841L2.0294 13.5457C1.69466 13.8804 1.69466 14.4231 2.0294 14.7578L3.24158 15.97C3.57632 16.3048 4.11903 16.3048 4.45376 15.97L5.51564 14.9081C6.06113 15.2304 6.65513 15.4792 7.28404 15.6411V17.1429C7.28404 17.6162 7.6678 18 8.14118 18H9.85547C10.3289 18 10.7126 17.6162 10.7126 17.1429V15.6411C11.3419 15.4791 11.9363 15.2301 12.4821 14.9075L13.5449 15.9703C13.8796 16.3051 14.4223 16.3051 14.7571 15.9703L15.9692 14.7582C16.304 14.4234 16.304 13.8807 15.9692 13.546L14.9063 12.483C15.2286 11.9374 15.4775 11.3433 15.6394 10.7143H17.1429C17.6162 10.7143 18 10.3305 18 9.85714V8.14286C18 7.66947 17.6162 7.28571 17.1429 7.28571H15.6394C15.4776 6.6568 15.2287 6.0628 14.9065 5.51732L15.9695 4.45429C16.3042 4.11955 16.3042 3.57684 15.9695 3.2421L14.7573 2.02992C14.4226 1.69518 13.8799 1.69518 13.5451 2.02992L12.4824 3.09267C11.9365 2.77003 11.3421 2.52089 10.7126 2.35889V0.857143C10.7126 0.383756 10.3289 0 9.85547 0H8.14118ZM12.4269 9C12.4269 10.8935 10.8919 12.4286 8.99833 12.4286C7.10478 12.4286 5.56975 10.8935 5.56975 9C5.56975 7.10645 7.10478 5.57143 8.99833 5.57143C10.8919 5.57143 12.4269 7.10645 12.4269 9Z"
      fill={props.color}
    />
  </svg>
);
SvgSettingsSmall.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgSettingsSmall.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgSettingsSmall.displayName = "SvgSettingsSmall";
const Memo = memo(SvgSettingsSmall);
export default Memo;
