import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgObjectUngroupRegular1 = (props) => (
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
      d="M1.35563 3.6791C1.35281 3.6566 1.35 3.63128 1.35 3.60878V3.60315C1.35 3.3556 1.5525 3.15306 1.8 3.15306C1.82531 3.15306 1.85344 3.15588 1.87875 3.15869C2.08969 3.19245 2.25 3.37811 2.25 3.60034C2.25 3.84789 2.0475 4.05043 1.8 4.05043C1.57781 4.05043 1.39219 3.89008 1.35563 3.6791ZM0 3.60034C0 4.35705 0.464062 5.00405 1.125 5.26848V8.23062C0.464062 8.49786 0 9.14486 0 9.90157C0 10.8946 0.807187 11.7019 1.8 11.7019C2.55656 11.7019 3.20344 11.2378 3.46781 10.5767H9.12937C9.39656 11.2378 10.0434 11.7019 10.7972 11.7019C11.79 11.7019 12.5972 10.8946 12.5972 9.90157C12.5972 9.14486 12.1331 8.49786 11.4722 8.23343V5.27129C12.1331 5.00405 12.5972 4.35705 12.5972 3.60315C12.5972 2.61015 11.79 1.8028 10.7972 1.8028C10.0406 1.8028 9.39375 2.26695 9.12937 2.92802L3.46781 2.92521C3.20344 2.26414 2.55656 1.79999 1.8 1.79999C0.807187 1.79999 0 2.60733 0 3.60034ZM10.35 3.60034C10.35 3.48097 10.3974 3.36649 10.4818 3.28208C10.5662 3.19767 10.6807 3.15025 10.8 3.15025C10.9193 3.15025 11.0338 3.19767 11.1182 3.28208C11.2026 3.36649 11.25 3.48097 11.25 3.60034C11.25 3.71971 11.2026 3.83419 11.1182 3.9186C11.0338 4.00301 10.9193 4.05043 10.8 4.05043C10.6807 4.05043 10.5662 4.00301 10.4818 3.9186C10.3974 3.83419 10.35 3.71971 10.35 3.60034ZM9.13219 4.27547C9.315 4.72556 9.675 5.08844 10.125 5.26848V8.23062C9.675 8.41347 9.31219 8.77354 9.13219 9.22363H3.47062C3.28781 8.77354 2.92781 8.41065 2.47781 8.23062V5.26848C2.92781 5.08563 3.29062 4.72556 3.47062 4.27547H9.13219ZM10.8 9.45148C10.9193 9.45148 11.0338 9.4989 11.1182 9.58331C11.2026 9.66772 11.25 9.7822 11.25 9.90157C11.25 10.0209 11.2026 10.1354 11.1182 10.2198C11.0338 10.3042 10.9193 10.3517 10.8 10.3517C10.6807 10.3517 10.5662 10.3042 10.4818 10.2198C10.3974 10.1354 10.35 10.0209 10.35 9.90157C10.35 9.7822 10.3974 9.66772 10.4818 9.58331C10.5662 9.4989 10.6807 9.45148 10.8 9.45148ZM2.25 9.90157C2.25 10.1238 2.08969 10.3095 1.87875 10.346C1.85625 10.3488 1.83094 10.3517 1.80844 10.3517H1.80281C1.55531 10.3517 1.35281 10.1491 1.35281 9.90157C1.35281 9.87625 1.35562 9.84812 1.35844 9.82281C1.39219 9.61183 1.57781 9.45148 1.8 9.45148C2.0475 9.45148 2.25 9.65402 2.25 9.90157ZM13.2553 8.77635H14.5322C14.715 9.22644 15.075 9.58932 15.525 9.76936V12.7315C15.075 12.9143 14.7122 13.2744 14.5322 13.7245H8.87062C8.68781 13.2744 8.32781 12.9115 7.87781 12.7315V11.6991H6.52781V12.7315C5.86688 12.9987 5.40281 13.6457 5.40281 14.3996C5.40281 15.3926 6.21 16.2 7.20281 16.2C7.95937 16.2 8.60625 15.7358 8.87062 15.0748H14.5322C14.7994 15.7358 15.4462 16.2 16.2 16.2C17.1928 16.2 18 15.3926 18 14.3996C18 13.6429 17.5359 12.9959 16.875 12.7315V9.76936C17.5359 9.50212 18 8.85512 18 8.10122C18 7.10821 17.1928 6.30087 16.2 6.30087C15.4434 6.30087 14.7966 6.76502 14.5322 7.42609H12.6V7.88743C12.8756 8.13497 13.1006 8.43597 13.2553 8.77635ZM15.7556 8.02527C15.7637 7.96526 15.7839 7.90751 15.8149 7.85547C15.8458 7.80343 15.887 7.75818 15.9358 7.72242C15.9847 7.68666 16.0403 7.66113 16.0992 7.64736C16.1582 7.63359 16.2193 7.63186 16.279 7.64228C16.3386 7.65269 16.3955 7.67504 16.4463 7.70798C16.4971 7.74092 16.5408 7.78377 16.5746 7.83398C16.6085 7.88418 16.6319 7.9407 16.6434 8.00015C16.6549 8.05961 16.6543 8.12077 16.6416 8.17998C16.6334 8.23999 16.6133 8.29775 16.5823 8.34978C16.5514 8.40182 16.5102 8.44707 16.4614 8.48283C16.4125 8.51859 16.3569 8.54412 16.298 8.55789C16.239 8.57166 16.1779 8.57339 16.1182 8.56297C16.0586 8.55256 16.0017 8.53021 15.9509 8.49727C15.9001 8.46433 15.8564 8.42148 15.8226 8.37127C15.7887 8.32107 15.7653 8.26455 15.7538 8.2051C15.7423 8.14564 15.7429 8.08448 15.7556 8.02527ZM7.64437 14.4784C7.63625 14.5384 7.6161 14.5962 7.58514 14.6482C7.55418 14.7002 7.51303 14.7455 7.46417 14.7812C7.41531 14.817 7.35973 14.8425 7.30077 14.8563C7.24182 14.8701 7.18069 14.8718 7.12104 14.8614C7.0614 14.851 7.00447 14.8286 6.95367 14.7957C6.90286 14.7628 6.85923 14.7199 6.82537 14.6697C6.79152 14.6195 6.76814 14.563 6.75664 14.5035C6.74514 14.4441 6.74575 14.3829 6.75844 14.3237C6.76656 14.2637 6.78671 14.2059 6.81767 14.1539C6.84864 14.1018 6.88978 14.0566 6.93864 14.0208C6.9875 13.9851 7.04308 13.9595 7.10204 13.9458C7.161 13.932 7.22213 13.9303 7.28177 13.9407C7.34141 13.9511 7.39834 13.9735 7.44914 14.0064C7.49995 14.0393 7.54358 14.0822 7.57744 14.1324C7.61129 14.1826 7.63467 14.2391 7.64617 14.2986C7.65768 14.358 7.65706 14.4192 7.64437 14.4784ZM16.2787 13.958C16.3387 13.9661 16.3965 13.9863 16.4485 14.0172C16.5005 14.0482 16.5458 14.0894 16.5815 14.1382C16.6173 14.1871 16.6428 14.2427 16.6566 14.3017C16.6704 14.3606 16.6721 14.4218 16.6617 14.4814C16.6513 14.5411 16.6289 14.598 16.596 14.6488C16.563 14.6996 16.5202 14.7433 16.47 14.7771C16.4198 14.811 16.3633 14.8344 16.3039 14.8459C16.2444 14.8574 16.1833 14.8568 16.1241 14.8441C16.0641 14.836 16.0063 14.8158 15.9543 14.7849C15.9023 14.7539 15.857 14.7127 15.8213 14.6639C15.7855 14.615 15.76 14.5594 15.7462 14.5004C15.7325 14.4415 15.7307 14.3803 15.7411 14.3207C15.7516 14.261 15.7739 14.2041 15.8068 14.1533C15.8398 14.1024 15.8826 14.0588 15.9328 14.0249C15.983 13.9911 16.0395 13.9677 16.099 13.9562C16.1584 13.9447 16.2195 13.9453 16.2787 13.958Z"
      fill={props.color}
    />
  </svg>
);
SvgObjectUngroupRegular1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgObjectUngroupRegular1.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgObjectUngroupRegular1.displayName = "SvgObjectUngroupRegular1";
const Memo = memo(SvgObjectUngroupRegular1);
export default Memo;
