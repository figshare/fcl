import classnames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";

import ChevronDown from "../../icons/chevron/down/medium";
import ChevronDownSmall from "../../icons/chevron/down/small";
import ChevronDownLarge from "../../icons/chevron/down/large";
import Cancel from "../../icons/cancel/medium.jsx";
import { Content, Trigger as TooltipTrigger, UncontrolledTooltip as Tooltip } from "../../tooltip/index.jsx";
import { Toggle } from "../../dropdown";
import { Button } from "../../button";
import withRef from "../../helpers/withRef.jsx";
import Context from "../context.js";

import style from "./Trigger.css";


const variants = {
  secondary: {},
  inline: {
    trigger: style["trigger-inline"],
    text: style["text-inline"],
    icon: style["caret-inline"],
    arrow: ChevronDown,
  },
};

const Icons = {
  small: ChevronDownSmall,
  medium: ChevronDown,
  large: ChevronDownLarge,
};

export class Trigger extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.bool,
    iconSize: PropTypes.string,
    id: PropTypes.string,
    renderChipArea: PropTypes.func,
    setTriggerRef: PropTypes.any,
    variant: PropTypes.oneOf(Object.keys(variants)),
    onClear: PropTypes.func,
  }

  static defaultProps = {
    ariaLabel: undefined,
    className: undefined,
    error: false,
    id: "",
    iconSize: "small",
    renderChipArea: undefined,
    setTriggerRef: null,
    variant: "secondary",
    onClear: undefined,
  }

  static contextType = Context;

  render() {
    return (
      <Toggle>
        {this.renderTrigger}
      </Toggle>
    );
  }

  renderTrigger = ({ onToggle, props }) => {
    const {
      ariaLabel,
      children,
      className,
      error,
      renderChipArea,
      setTriggerRef,
      variant,
      onClear,
      ...buttonProps
    } = this.props;
    const { size } = this.context;

    const classNames = [
      style.trigger,
      { [style.error]: error },
      variants[variant].trigger,
      className,
    ];

    return (
      <div {...props}>
        <div ref={setTriggerRef}>
          {renderChipArea?.()}
          <Button
            aria-label={ariaLabel}
            data-id="select-trigger-btn"
            size={size}
            variant={variant}
            onClick={onToggle}
            {...buttonProps}
            className={classnames(classNames)}
          >
            <span className={classnames(style.text, variants[variant].text)}>{children}</span>

            {onClear &&
              <Tooltip hideDelay={0}>
                {this.renderClearTooltip}
              </Tooltip>}

            <Tooltip hideDelay={0}>
              {this.renderShowTooltip}
            </Tooltip>
          </Button>
        </div>
      </div>
    );
  }

  renderShowTooltip = () => (
    <>
      <TooltipTrigger>
        {this.renderShowTrigger}
      </TooltipTrigger>
      <Content placement="top" strategy="fixed">
        {this.renderShowContent}
      </Content>
    </>
  )

  renderClearTooltip = () => (
    <>
      <TooltipTrigger>
        {this.renderClearTrigger}
      </TooltipTrigger>
      <Content placement="top" strategy="fixed">
        {this.renderClearContent}
      </Content>
    </>
  )

  renderShowTrigger = ({ ...props }) => {
    const { variant, className, iconSize } = this.props;
    const { size } = this.context;

    const Icon = variants[variant].arrow || Icons[iconSize];
    const carretClassName = [
      style.caret,
      variants[variant].icon,
      {
        [style["caret-small"]]: size === "S" || iconSize === "small",
        [style["caret-medium"]]: size === "M" || iconSize === "medium",
        [style["caret-large"]]: size === "L" || iconSize === "large",
      },
      className,
    ];

    return (
      <Button
        className={style.tooltipButton}
        {...props}
      >
        <Icon className={classnames(carretClassName)} />
      </Button>);
  }

  renderClearTrigger = ({ ...props }) => (
    <Button {...props} className={classnames(style.tooltipButton, style.clear)} onClick={this.onClear}>
      <Cancel className={style.icon} />
    </Button>);

  renderClearContent = ({ ...props }) => <div {...props} className={style.tooltip}>Clear selection</div>;

  renderShowContent = ({ ...props }) => <div {...props} className={style.tooltip}>Show options</div>;

  onClear = (event) => {
    const { onClear, id } = this.props;
    event.stopPropagation();
    event.preventDefault();

    if (typeof onClear === "function") {
      onClear(id);
    }
  }
}

export default withRef(Trigger);

