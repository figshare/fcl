import classnames from "classnames";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import styles from "./text.css";


export default class FigshareText extends PureComponent {
  static name = "icons/FigshareText";

  static propTypes = { className: PropTypes.string }

  static defaultProps = { className: styles.textLogo }

  render() {
    const { className, ...props } = this.props;

    return (
      <svg
        aria-hidden={true}
        fill="transparent"
        preserveAspectRatio="xMidYMid meet"
        {...props}
        className={classnames(styles.color, className)}
        data-component={FigshareText.name}
        focusable={false}
        viewBox="0 0 240 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.2,44.9v29.4h-4.9V44.9H10v-3.7h4.3v-6.3c0-5,2.8-9,8.5-9h3.5v4.2h-2.6c-3.1,0-4.5,1.8-4.5,4.9v6.2h7.1v3.7H19.2z M33.5,31.8c-1.8,0-3.3-1.5-3.3-3.3c0-1.8,1.5-3.3,3.3-3.3c1.8,0,3.4,1.5,3.4,3.3C36.9,30.3,35.4,31.8,33.5,31.8z" />
        <rect height="33.4" width="4.9" x="31.1" y="41" />
        <path d="M55.6,89.7c-5,0-7.8-1.3-11.3-4.5l3.2-3.1c2.4,2.2,4.1,3.3,8,3.3c6.4,0,9.2-4.5,9.2-10.2V70c-2.7,3.5-5.8,4.3-9.4,4.3c-3.4,0-6.3-1.2-8.1-3c-3.3-3.3-4.1-8.5-4.1-13.9s0.7-10.6,4.1-13.9c1.8-1.8,4.7-2.9,8.1-2.9c3.7,0,6.6,0.8,9.4,4.3V41h4.8v34.4C69.5,83.7,64.3,89.7,55.6,89.7z M56.3,44.9c-7.3,0-8.3,6.2-8.3,12.5s1.1,12.5,8.3,12.5c7.3,0,8.3-6.2,8.3-12.5S63.6,44.9,56.3,44.9z M88.8,74.8c-5.6,0-10.6-0.6-15.1-5.1l5.8-5.8c2.9,2.9,6.7,3.3,9.4,3.3c3.1,0,6.2-1,6.2-3.7c0-1.8-1-3-3.7-3.3l-5.6-0.5c-6.4-0.6-10.3-3.4-10.3-9.9c0-7.3,6.4-11.3,13.6-11.3c5.5,0,10.1,0.9,13.5,4.1l-5.4,5.5c-2-1.8-5.2-2.4-8.2-2.4c-3.5,0-5,1.6-5,3.4c0,1.3,0.5,2.8,3.7,3.1l5.6,0.5c7,0.7,10.5,4.4,10.5,10.4C103.8,71.1,97.1,74.8,88.8,74.8z M128,74.4V52.8c0-4.7-3-6.2-5.8-6.2c-2.8,0-5.7,1.6-5.7,6.2v21.6h-8.8V26.1h8.8v16.2c2.4-2.4,5.4-3.7,8.5-3.7c7.7,0,11.8,5.4,11.8,12.9v22.9H128z M161.1,74.4v-3.1c-2.4,2.4-4.6,3.4-8.7,3.4c-4,0-6.9-1-9-3.1c-1.9-2-2.9-4.8-2.9-7.9c0-5.6,3.9-10.2,12.1-10.2h8.3v-1.8c0-3.9-1.9-5.6-6.6-5.6c-3.4,0-5,0.8-6.8,2.9l-5.6-5.5c3.5-3.8,6.9-4.9,12.8-4.9c9.9,0,15.1,4.2,15.1,12.5v23.3H161.1zM160.9,59.5h-7c-3.2,0-5,1.5-5,4c0,2.4,1.6,4.1,5.1,4.1c2.4,0,4-0.2,5.6-1.7c1-0.9,1.3-2.3,1.3-4.5V59.5z M195,48.7c-1.4-1.4-2.5-2.1-4.7-2.1c-2.7,0-5.7,2-5.7,6.5v21.3h-8.8V39h8.6v3.4c1.7-2,5.1-3.8,8.9-3.8c3.5,0,5.9,0.9,8.3,3.3L195,48.7z M208.1,59.5c0,4.5,2.8,7.9,7.7,7.9c3.9,0,5.8-1.1,8-3.3l5.4,5.2c-3.6,3.6-7.1,5.6-13.4,5.6c-8.3,0-16.3-3.8-16.3-18.1c0-11.5,6.2-18,15.4-18c9.8,0,15.4,7.2,15.4,16.9v3.9H208.1z M220.7,49.6c-0.9-2.1-2.9-3.7-5.9-3.7s-5,1.6-5.9,3.7c-0.5,1.3-0.7,2.2-0.8,3.8h13.4C221.5,51.9,221.3,50.9,220.7,49.6z" />
      </svg>
    );
  }
}