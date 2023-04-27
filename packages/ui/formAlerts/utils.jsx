import uuid from "../helpers/utils/uuid";


const defaultOptions = {
  channel: "global-alerts",
  type: "warning",
  content: "Unknown message",
  identifier: "form-alert",
};

export function pushFormAlert(options = {}) {
  const config = { ...defaultOptions, ...options };
  const { type, channel, content, identifier, timeout } = config;

  const event = new CustomEvent("form-alerts:message", {
    detail: {
      action: "push",
      channel,
      timeout,
      message: {
        id: `${identifier}:${uuid()}`,
        type,
        content,
      },
    },
  });

  document.dispatchEvent(event);
}

export function clearFormAlerts(channel) {
  const event = new CustomEvent("form-alerts:message", {
    detail: {
      action: "clear",
      channel,
    },
  });

  document.dispatchEvent(event);
}

export function popFormAlert(channel, id) {
  const event = new CustomEvent("form-alerts:message", {
    detail: {
      action: "pop",
      channel,
      message: { id },
    },
  });

  document.dispatchEvent(event);
}
