import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgTextEditorStrikethrough = (props) => (
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
      d="M3.49011 7.09899C3.50973 7.12832 3.52988 7.1574 3.55056 7.18622H7.36565C6.42981 6.92803 5.82016 6.67506 5.5367 6.4273C5.13375 6.08128 4.93227 5.64026 4.93227 5.10427C4.93227 4.48685 5.21504 3.96103 5.7806 3.52681C6.35322 3.0858 7.26164 2.86529 8.50585 2.86529C9.70058 2.86529 10.6019 3.10615 11.2099 3.58787C11.8249 4.06959 12.1855 4.78199 12.2915 5.72508L14.2639 5.58259C14.2285 4.70736 13.974 3.92372 13.5004 3.23167C13.0267 2.53962 12.3481 2.0172 11.4644 1.66439C10.5878 1.3048 9.57333 1.125 8.42102 1.125C7.37475 1.125 6.42391 1.29462 5.56851 1.63386C4.71312 1.9731 4.06273 2.47178 3.61736 3.1299C3.17199 3.78124 2.9493 4.48346 2.9493 5.23657C2.9493 5.92183 3.12957 6.54264 3.49011 7.09899Z"
      fill={props.color}
    />
    <path
      d="M2.35547 11.5057L4.29602 11.3429C4.38792 12.0892 4.60001 12.7032 4.93227 13.1849C5.2716 13.6599 5.79474 14.0466 6.50168 14.3451C7.20862 14.6369 8.00393 14.7827 8.8876 14.7827C9.67231 14.7827 10.3651 14.6708 10.966 14.4469C11.5669 14.223 12.0123 13.9177 12.3021 13.531C12.599 13.1374 12.7475 12.71 12.7475 12.2486C12.7475 11.7805 12.6061 11.3734 12.3233 11.0274C12.0406 10.6746 11.574 10.3794 10.9236 10.142C10.774 10.086 10.5594 10.0191 10.2797 9.94133H14.0641L14.0836 9.96895C14.5149 10.5796 14.7305 11.2852 14.7305 12.0858C14.7305 12.8796 14.4936 13.6293 14.02 14.3349C13.5463 15.0338 12.8641 15.58 11.9734 15.9735C11.0897 16.3602 10.0929 16.5536 8.98304 16.5536C7.57623 16.5536 6.39564 16.3568 5.44127 15.9633C4.49397 15.5698 3.74814 14.9795 3.2038 14.1925C2.66652 13.3987 2.38375 12.5031 2.35547 11.5057Z"
      fill={props.color}
    />
    <path d="M18 7.875H0V9.25255H18V7.875Z" fill={props.color} />
  </svg>
);
SvgTextEditorStrikethrough.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorStrikethrough.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgTextEditorStrikethrough.displayName = "SvgTextEditorStrikethrough";
const Memo = memo(SvgTextEditorStrikethrough);
export default Memo;
