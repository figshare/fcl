import React, { Component } from "react";
import PropTypes from "prop-types";

import { Select, Option } from "../../packages/ui/select";


const ITEMS_PER_PAGE = 20;
const LOAD_DELAY = 1000;

export default class SelectDemo extends Component {
  static propTypes = {
    externalSearch: PropTypes.bool,
    loading: PropTypes.bool,
    loadingErrorMessage: PropTypes.string,
    retry: PropTypes.object,
    triggerError: PropTypes.bool,
  }

  static defaultProps = {
    externalSearch: false,
    loading: undefined,
    loadingErrorMessage: undefined,
    triggerError: false,
    retry: undefined,
  }

  state = {
    value: undefined,
    options: [],
    loading: false,
    loadingErrorMessage: undefined,
    retry: undefined,
    search: undefined,
  }

  render() {
    const { options, value, loading, loadingErrorMessage, retry } = this.state;
    const err = this.props.loadingErrorMessage || loadingErrorMessage;
    const ldg = this.props.loading || loading;
    const rtr = this.props.retry || retry;
    const onSearch = this.props.externalSearch ? this.onSearch : undefined;

    return (
      <Select
        {...this.props}
        loading={ldg}
        loadingErrorMessage={err}
        retry={rtr}
        value={value}
        onChange={this.onChange}
        onLoadMore={this.onLoadMore}
        onSearch={onSearch}
        onToggle={this.onToggle}
      >
        {options.map(this.renderOption)}
      </Select>
    );
  }

  renderOption = (nr) => {
    const name = this.state.search || "Option";

    return <Option key={`option-${nr}`} value={nr}>{`${name} ${nr}`}</Option>;
  };

  onToggle = (visible) => {
    if (!visible) {
      return;
    }

    const { loadingErrorMessage, loading } = this.props;
    const { options } = this.state;

    if (loadingErrorMessage !== undefined || loading !== undefined || options.length) {
      return;
    }

    this.onLoadMore();
  }

  onChange = (value) => {
    this.setState({ value });
  }

  onLoadMore = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      const { options } = this.state;
      const newOptions = [...options];

      if (this.props.triggerError) {
        const steps = options.length / ITEMS_PER_PAGE;
        if (steps >= 2) {
          this.setState({
            loadingErrorMessage: "Error after loading 2 pages",
            loading: false,
          });

          return;
        }
      }

      for (let i = options.length; i < options.length + ITEMS_PER_PAGE; i += 1) {
        newOptions.push(i + 1);
      }

      this.setState({ options: newOptions, loading: false });

    }, LOAD_DELAY);
  }

  onSearch = (search) => this.setState({ search });
}

export const renderTrigger = (value) => {
  if (!(value && value.length)) {
    return "Use this awesome dropdown";
  }

  if (value.length > 3) {
    return `${value.length} options selected`;
  }

  return value.map((item) => `Option ${item}`).join(", ");
};
