/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-05-02
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  static getDerivedStateFromProps(nextProps, preState) {
    const { value } = nextProps;
    if (value) {
      return { value: value };
    }
    return {};
  }
  handleChange = e => {
    const newValue = e.target.value;
    const { onChange } = this.props;
    this.setState({ value: newValue });
    onChange(newValue);
  };
  handleBlur = () => {
    const { onBlur } = this.props;
    const { value } = this.state;
    onBlur(value);
  };
  render() {
    const { value } = this.state;
    const { handleChange, handleBlur } = this;
    return (
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    );
  }
}

const noop = () => {};

Input.propTypes = {
  onBlur: PropTypes.func,
  onChange: PropTypes.func
};

Input.defaultProps = {
  onBlur: PropTypes.func,
  onChange: noop
};
