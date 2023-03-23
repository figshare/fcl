/* eslint-disable max-len */
import React, { PureComponent } from "react";


export default class Link extends PureComponent {

  static name = "icons/Link";

  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        preserveAspectRatio="xMidYMid meet"
        {...this.props}
        data-component={Link.name}
        focusable={false}
        viewBox="0 0 30 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.69542 19.7954C8.75245 20.7384 8.7708 22.2984 9.7362 23.2638C10.7016 24.2292 12.2616 24.2475 13.2046 23.3046L15.8977 20.6115C16.8406 19.6685 16.8223 18.1085 15.8569 17.1431C15.7575 17.0408 15.6223 16.9821 15.482 16.9795C15.3411 16.9764 15.2068 17.0305 15.1083 17.129C15.0098 17.2275 14.9557 17.3618 14.9588 17.5027C14.9615 17.643 15.0202 17.7782 15.1224 17.8776C15.6844 18.4396 15.6947 19.3106 15.1457 19.8595L12.4526 22.5526C11.9037 23.1016 11.0327 23.0913 10.4707 22.5293C9.90867 21.9673 9.89843 21.0963 10.4474 20.5474L13.0181 17.9767C13.1181 17.8797 13.1736 17.7458 13.1729 17.6055C13.1722 17.4642 13.115 17.3286 13.0146 17.2282C12.9138 17.1274 12.7781 17.0701 12.6373 17.0699C12.497 17.0693 12.3632 17.1248 12.2661 17.2247L9.69542 19.7954ZM14.1023 15.3885C13.1594 16.3315 13.1777 17.8915 14.1431 18.8569C14.242 18.9587 14.3772 19.0174 14.518 19.0205C14.6584 19.0231 14.7932 18.9695 14.8917 18.871C14.9902 18.7725 15.0438 18.6377 15.0412 18.4973C15.0381 18.3565 14.9794 18.2213 14.8776 18.1224C14.3156 17.5604 14.3053 16.6894 14.8543 16.1405L17.5474 13.4474C18.0963 12.8984 18.9673 12.9087 19.5293 13.4707C20.0913 14.0327 20.1016 14.9037 19.5526 15.4526L16.9819 18.0233C16.882 18.1203 16.826 18.2537 16.8271 18.3945C16.8278 18.5348 16.8846 18.6709 16.9854 18.7718C17.0858 18.8721 17.2219 18.9289 17.3622 18.9296C17.503 18.9307 17.6364 18.8747 17.7339 18.7753L20.3046 16.2046C21.2475 15.2616 21.2292 13.7016 20.2638 12.7362C19.2984 11.7708 17.7384 11.7525 16.7954 12.6954L14.1023 15.3885Z" fill="currentColor" />
      </svg>
    );
  }
}
