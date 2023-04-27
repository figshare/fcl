import React from "react";
import { string } from "prop-types";

import { IconButton } from "../button";
import Alert from "../alert";
import Info from "../icons/info/small";
import Warning from "../icons/warning/small";
import Close from "../icons/cancel/medium";
import Checkmark from "../icons/checkMark/small";

// eslint-disable-next-line css-modules/no-unused-class
import styles from "./formAlerts.css";
import { popFormAlert } from "./utils";


const IconsByType = {
  error: Warning,
  warning: Info,
  success: Checkmark,
};

export class FormAlerts extends React.PureComponent {
  static propTypes = {
    /**
     * The unique id for this alerts component.
     * Will represent the `channel` used to listen to form alert messages.
     */
    id: string.isRequired,
  }

  static defaultProps = { id: "global-alerts" }

  state = { messages: [], id: this.props.id }

  componentDidMount() {
    document.addEventListener("form-alerts:message", this.onWarningEvent);
  }

  componentWillUnmount() {
    document.removeEventListener("form-alerts:message", this.onWarningEvent);
  }

  render() {
    const { messages } = this.state;

    const empty = !messages?.length;

    return (
      <div className={`${styles.alerts} ${empty ? styles.empty : styles.shown}`}>
        {messages.map(this.renderAlert)}
      </div>
    );
  }

  renderAlert = (alert) => {
    const { id, type, content } = alert;
    const Icon = IconsByType[type];

    return (
      <Alert
        key={id}
        className={`${styles.alert} ${styles[type]}`}
        data-id={`form-alert:${this.state.id}-${id}`}
        variant={type}
      >
        {() => (<>
          <div className={styles.alertIcon}><Icon /></div>
          <div className={styles.alertText}>{content}</div>
          <IconButton
            Icon={Close}
            className={styles.alertClose}
            data-control-id="form-alert-close-button"
            theme="tertiary"
            onClick={this.onHideAlert(alert)}
          />
        </>)}
      </Alert>
    );
  }

  onWarningEvent = (event) => {
    const { id: componentChannel, messages } = this.state;
    const { detail: { action, message, channel, timeout } } = event;

    if (channel !== componentChannel) {
      return;
    }

    switch (action) {
      case "push":
        this.setState({ messages: [message] });

        if (typeof timeout === "number") {
          const id = message?.id;

          setTimeout(() => {
            popFormAlert(componentChannel, id);
          }, [timeout]);
        }
        break;
      case "clear":
        this.setState({ messages: [] });
        break;
      case "pop": {
        const index = messages.findIndex((m) => message?.id === m.id);

        if (index !== 1) {
          const newMessages = messages.slice();
          newMessages.splice(index, 1);

          this.setState({ messages: newMessages });
        }
        break;
      }
      default:
        break;
    }
  }

  onHideAlert = (alert) => () => {
    const { id: componentChannel } = this.state;

    popFormAlert(componentChannel, alert.id);
  }
}

