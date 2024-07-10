import React, { PureComponent } from "react";


export default class EyeVisibleSmall extends PureComponent {
  render() {
    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        focusable={false}
        height="12"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 12 12"
        width="12"
        xmlns="https://www.w3.org/2000/svg"
        {...this.props}
      >
        <path d="M12 5.82909C12 6.3833 10.0278 9.45 6 9.45C2.34288 9.45 0 6.36963 0 5.82909C0 5.34686 2.29134 2.25 5.96564 2.25C9.89893 2.25 12 5.34686 12 5.82909ZM9.06786 5.85885C9.06786 4.26376 7.68704 2.97072 5.98368 2.97072C4.28032 2.97072 2.8995 4.26376 2.8995 5.85885C2.8995 7.45393 4.28032 8.74697 5.98368 8.74697C7.68704 8.74697 9.06786 7.45393 9.06786 5.85885ZM5.98368 3.50926C4.59771 3.50926 3.47416 4.56138 3.47416 5.85925C3.47416 7.15712 4.59771 8.20924 5.98368 8.20924C7.36965 8.20924 8.4932 7.15712 8.4932 5.85925C8.4932 4.56138 7.36922 3.50926 5.98368 3.50926Z" />
      </svg>
    );
  }
}
