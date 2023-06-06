import React from "react";
import { string, bool } from "prop-types";
import classnames from "classnames";

import { IconButton } from "../button";
import Alert from "../alert";
import Info from "../icons/info/small";
import Warning from "../icons/warning/small";
import Close from "../icons/cancel/medium";
import Checkmark from "../icons/checkMark/small";

// eslint-disable-next-line css-modules/no-unused-class
import styles from "./alerts.css";
import { popAlert } from "./utils";


const IconsByType = {
  error: Warning,
  warning: Info,
  success: Checkmark,
  info: Info,
};

const NO_ATTRIBUTES = {};

export class Alerts extends React.PureComponent {
  static propTypes = {
    /**
     * The unique id for this alerts component.
     * Will represent the `channel` used to listen to form alert messages.
     */
    id: string.isRequired,
    /**
      * Optional className to append to the Alerts wrapper.
    */
    className: string,
    /**
      * Optional flag to show Alerts at the viewport level.
    */
    isFixed: bool,
    /**
      * Optional flag to hide Alert `type` icons.
      * If true, content will also be visually centered.
    */
    noTypeIcon: bool,
  }

  static defaultProps = { id: "global-alerts", className: undefined, isFixed: false, noTypeIcon: false }

  state = { messages: [], id: this.props.id }

  componentDidMount() {
    document.addEventListener("form-alerts:message", this.onWarningEvent);
  }

  componentWillUnmount() {
    document.removeEventListener("form-alerts:message", this.onWarningEvent);
  }

  render() {
    const { id, messages } = this.state;
    const { className, isFixed, noTypeIcon } = this.props;

    const empty = !messages?.length;

    return (
      <div
        className={
          classnames(
            styles.alerts,
            empty ? styles.empty : styles.shown,
            {
              [styles.isFixed]: isFixed,
              [styles.noTypeIcon]: noTypeIcon,
            },
            className,
          )
        }
        data-alerts-channel={id}
        data-alerts-empty={empty}
      >
        {messages.map(this.renderAlert)}
      </div>
    );
  }

  renderAlert = (alert) => {
    const { id, type, content, attributes = NO_ATTRIBUTES } = alert;
    const Icon = IconsByType[type];

    return (
      <Alert
        key={id}
        className={`${styles.alert} ${styles[type]}`}
        data-id={`form-alert:${this.state.id}-${id}`}
        variant={type}
        {...attributes}
        data-alert-type={type}
      >
        {() => (<>
          <div className={styles.alertIcon}><Icon /></div>
          <div className={styles.alertText}>{content}</div>
          {this.renderCloseBtn(alert)}
        </>)}
      </Alert>
    );
  }

  renderCloseBtn = (alert) => {
    const { persistent } = alert;

    if (!persistent) {
      return (
        <IconButton
          Icon={Close}
          className={styles.alertClose}
          data-control-id="form-alert-close-button"
          theme="tertiary"
          onClick={this.onHideAlert(alert)}
        />);
    }

    return null;
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
            popAlert(componentChannel, id);
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

    popAlert(componentChannel, alert.id);
  }
}

