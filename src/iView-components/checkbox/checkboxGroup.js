/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-05-02
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { CheckboxProvider } from "./checkboxContext";

export default class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.defaultValues || []
    };
  }
  onCheckBoxChange = label => {
    const { values } = this.state;
    const { onChange } = this.props;
    const index = values.indexOf(label);
    let newValues = [...values];
    if (index >= 0) {
      newValues.splice(index, 1);
    } else {
      newValues.push(label);
    }
    this.setState({ values: newValues });
    onChange(newValues);
  };
  render() {
    const { children } = this.props;
    const { values } = this.state;
    const { onCheckBoxChange } = this;
    return (
      <div>
        <CheckboxProvider value={{ ...{ values, onCheckBoxChange } }}>
          {children}
        </CheckboxProvider>
      </div>
    );
  }
}

const noop = () => {};

CheckboxGroup.propTypes = {
  defaultValues: PropTypes.array,
  onChange: PropTypes.func
};

CheckboxGroup.defautlProps = {
  defaultValues: [],
  onChange: noop
};
