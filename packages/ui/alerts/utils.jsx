import uuid from "../helpers/utils/uuid";


const defaultOptions = {
  channel: "global-alerts",
  persistent: false,
  type: "warning",
  content: "Unknown message",
  identifier: "form-alert",
};

export function pushAlert(options = {}) {
  const config = { ...defaultOptions, ...options };
  const { type, channel, content, persistent, identifier, timeout, title, attributes } = config;

  const event = new CustomEvent("form-alerts:message", {
    detail: {
      action: "push",
      channel,
      timeout,
      message: {
        id: `${identifier}:${uuid()}`,
        type,
        content,
        persistent,
        attributes,
        title,
      },
    },
  });

  document.dispatchEvent(event);
}

export function clearAlerts(channel) {
  const event = new CustomEvent("form-alerts:message", {
    detail: {
      action: "clear",
      channel,
    },
  });

  document.dispatchEvent(event);
}

export function popAlert(channel, id) {
  const event = new CustomEvent("form-alerts:message", {
    detail: {
      action: "pop",
      channel,
      message: { id },
    },
  });

  document.dispatchEvent(event);
}
