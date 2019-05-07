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
      value: props.value || ""
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
    const { onFieldChange, onChange } = this.props;
    this.setState({ value: newValue });
    onFieldChange(newValue);
    onChange(newValue);
  };
  handleBlur = () => {
    const { onFieldBlur } = this.props;
    const { value } = this.state;
    onFieldBlur(value);
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
  onFieldBlur: PropTypes.func,
  onFieldChange: PropTypes.func,
  onChange: PropTypes.func
};

Input.defauleProps = {
  onFieldBlur: noop,
  onFieldChange: noop,
  onChange: noop
};
