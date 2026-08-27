import React from "react";
import PropTypes from "prop-types";

import { getIn } from "../../utils/getIn";

import { AlertsList } from "./AlertsList";
import { popAlert } from "./utils";


export function Alerts({ id: componentChannel, className, initial, isFixed, onDismiss, margin, stackType, ...props }) {
  const [messages, setMessages] = React.useState(initial);
  const tickets = React.useRef([]);

  const clearExistingTicket = React.useCallback((id) => {
    tickets.current.forEach((entry) => {
      if (entry.id === id) {
        clearTimeout(entry.ticket);
      }
    });
  }, []);

  const onDismissAlert = React.useCallback((alert) => {
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
    <AlertsList
      alerts={messages}
      channel={componentChannel}
      className={className}
      stackType={stackType}
      isFixed={isFixed}
      margin={margin}
      onDismiss={onDismissAlert}
      {...props}
    />
  );
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
