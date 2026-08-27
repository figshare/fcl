import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { compact } from "../../utils/compact";
import { getIn } from "../../utils/getIn";
import { Alert } from "../Alert";

import { popAlert } from "./utils";
import styles from "./Alerts.module.css";


export function Alerts({ id: componentChannel, className, initial, isFixed, onDismiss, margin, stackType }) {
  const [messages, setMessages] = React.useState(initial);
  const tickets = React.useRef([]);
  const kind = React.useMemo(() => compact([
    isFixed ? "fixed" : "",
    margin ? "margin" : "",
  ], compact.filters.falsy).join(" "), [isFixed, margin]);

  const clearExistingTicket = React.useCallback((id) => {
    tickets.current.forEach((entry) => {
      if (entry.id === id) {
        clearTimeout(entry.ticket);
      }
    });
  }, []);

  const onHideAlert = React.useCallback((alert) => {
    const idToPop = getIn(alert, "id", alert, getIn.predicates.nonEmptyString);

    popAlert(componentChannel, idToPop);
    onDismiss?.(alert, componentChannel);
  }, [componentChannel, onDismiss]);

  const onEvent = React.useCallback((event) => {
    const { detail: { action, alert, channel, timeout } } = event;
    const id = alert?.id;

    if (channel !== componentChannel) {
      return;
    }

    switch (action) {
      case "push":
        setMessages((previous) => {
          if (stackType === "single") {
            return [alert];
          }

          return [...previous, alert];
        });

        if (typeof timeout === "number") {
          const ticket = setTimeout(() => {
            popAlert(componentChannel, id);
          }, timeout);

          clearExistingTicket(id);

          tickets.current.push({ id, ticket });
        }
        break;
      case "clear":
        setMessages([]);
        break;
      case "pop": {
        setMessages((currentMessages) => {
          const index = currentMessages.findIndex((m) => id === m.id);

          if (index !== -1) {
            const newMessages = currentMessages.slice();
            newMessages.splice(index, 1);
            clearExistingTicket(id);

            return newMessages;
          }

          return currentMessages;
        });
        break;
      }
      default:
        break;
    }
  }, [clearExistingTicket, componentChannel, stackType]);

  React.useEffect(() => {
    document?.addEventListener?.("alerts:message", onEvent);

    return () => {
      document?.removeEventListener?.("alerts:message", onEvent);
    };
  }, [onEvent]);

  return (
    <div
      className={classnames(styles.alerts, className)}
      data-scope="alerts"
      data-part="list"
      data-stack-type={stackType}
      data-kind={kind}
      data-channel={componentChannel}
      data-empty={messages.length === 0}
    >
      {messages.map((message, index) => renderAlert(message, index, onHideAlert))}
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

Alerts.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  initial: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["info", "warning", "error", "success", "notice"]),
      content: PropTypes.node.isRequired,
      persistent: PropTypes.bool,
      attributes: PropTypes.object,
      title: PropTypes.string,
    })
  ),
  isFixed: PropTypes.bool,
  margin: PropTypes.string,
  stackType: PropTypes.oneOf(["single", "list", "stack"]),
  onDismiss: PropTypes.func,
};

Alerts.defaultProps = {
  className: undefined,
  id: "global-alerts",
  initial: [],
  isFixed: false,
  margin: "0px",
  onDismiss: undefined,
  stackType: "single",
};
