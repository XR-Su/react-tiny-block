/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-05-02
 */
import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import CheckboxContext from "./checkboxContext";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || false
    };
  }
  static getDerivedStateFromProps(nextProps, preState) {
    const { cbGroup, value, trueValue, falseValue, label } = nextProps;
    let newValue = value;
    if (cbGroup) {
      // 使用 CheckboxGroup
      newValue = cbGroup.values.indexOf(label) >= 0 ? trueValue : falseValue;
    }
    if (newValue === trueValue || newValue === falseValue) {
      return { value: newValue === trueValue };
    }
    return {};
  }

  handleChange = e => {
    if (this.props.disabled) {
      return false;
    }

    const { onChange, trueValue, falseValue, cbGroup, label } = this.props;
    const checked = e.target.checked;
    const newValue = checked ? trueValue : falseValue;
    this.setState({ value: checked });
    if (cbGroup) {
      // 使用 CheckboxGroup
      cbGroup.onCheckBoxChange(label);
    } else {
      onChange(newValue);
    }
  };
  render() {
    const { value } = this.state;
    const { disabled, children } = this.props;
    const { handleChange } = this;
    return (
      <label>
        <span>
          <input
            type="checkbox"
            checked={value}
            disabled={disabled}
            onChange={handleChange}
          />
          {children}
        </span>
      </label>
    );
  }
}

const CheckboxWrapper = props => {
  const cbGroup = useContext(CheckboxContext);
  return <Checkbox {...props} {...{ cbGroup }} />;
};

export default CheckboxWrapper;

const noop = () => {};

Checkbox.propTypes = {
  trueValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  falseValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  cbGroup: PropTypes.object // CheckboxGroup 提供的对象
};

Checkbox.defaultProps = {
  trueValue: true,
  falseValue: false,
  disabled: false,
  label: "",
  onChange: noop
};
