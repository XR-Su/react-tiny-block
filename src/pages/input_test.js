/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/30
 */

import React, { Component } from "react";
export default class TestInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }
  static getDerivedStateFromProps(nextProps, preState) {
    if (nextProps.value) {
      return { value: nextProps.value };
    }
    return {};
  }
  static onChange = e => {
    const value = e.target.value;
    this.setState({ value: value });
    this.props.onChange && this.props.onChange(value);
  };
  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.onChange} />
    );
  }
}
