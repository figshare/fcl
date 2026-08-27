import uuid from "../../helpers/utils/uuid";


const defaultOptions = {
  channel: "global-alerts",
  persistent: false,
  type: "warning",
  content: "Unknown message",
};

export function pushAlert(options = {}) {
  const config = { ...defaultOptions, ...options };
  const { type, channel, title, message, content, children, persistent, timeout, attributes, cause } = config;

  const event = new CustomEvent("alerts:message", {
    detail: {
      action: "push",
      channel,
      timeout,
      alert: {
        id: config.id ?? `alert:${uuid()}`,
        type,
        title,
        message: message ?? content,
        children,
        persistent,
        attributes,
        cause,
      },
    },
  });

  document.dispatchEvent(event);
}

export function clearAlerts(channel) {
  const event = new CustomEvent("alerts:message", {
    detail: {
      action: "clear",
      channel,
    },
  });

  document.dispatchEvent(event);
}

export function popAlert(channel, id) {
  const event = new CustomEvent("alerts:message", {
    detail: {
      action: "pop",
      channel,
      alert: { id },
    },
  });

  document.dispatchEvent(event);
}
