import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { compact } from "../../utils/compact";
import { Alert } from "../Alert";

import styles from "./AlertsList.module.css";

/*
  Uncontrolled list container component for Alert instances
  Contained alerts can be provided manually through children
  Or predefined in a list of alert message configs used to render Alert instances
*/
export function AlertsList({ channel, children, alerts, className, isFixed, onDismiss, margin, stackType, ...props }) {
  const kind = React.useMemo(() => compact([
    isFixed ? "fixed" : "",
    margin ? "margin" : "",
  ], compact.filters.falsy).join(" "), [isFixed, margin]);

  return (
    <div
      className={classnames(styles.alerts, className)}
      data-scope="alerts"
      data-part="list"
      data-stack-type={stackType}
      data-kind={kind}
      data-channel={channel}
      data-empty={alerts.length === 0}
      {...props}
    >
      {children ? children : alerts.map((message, index) => renderAlert(message, index, onDismiss))}
    </div>
  );
}

export function renderAlert(message, index, onClose) {
  return (
    <Alert
      key={message.id}
      id={message.id}
      data-alert-index={index}
      title={message.title}
      message={message.message}
      type={message.type}
      persistent={message.persistent}
      onClose={onClose}
      {...message.attributes}
    >{message.children}</Alert>
  )
}

AlertsList.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["info", "warning", "error", "success", "notice"]),
      content: PropTypes.node.isRequired,
      persistent: PropTypes.bool,
      attributes: PropTypes.object,
      title: PropTypes.string,
    })
  ),
  channel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isFixed: PropTypes.bool,
  margin: PropTypes.string,
  stackType: PropTypes.oneOf(["single", "list", "stack"]),
  onDismiss: PropTypes.func,
};

AlertsList.defaultProps = {
  alerts: [],
  className: undefined,
  children: undefined,
  channel: "global-alerts",
  isFixed: false,
  margin: "0px",
  onDismiss: undefined,
  stackType: "single",
};
