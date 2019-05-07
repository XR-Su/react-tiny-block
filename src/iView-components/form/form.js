/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-05-02
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormProvider } from "./formContext";

const _initialise = _this => {
  _this.addFormItem = formItem => _this.fields.push(formItem);
};

export default class Form extends Component {
  constructor(props) {
    super(props);
    _initialise(this);
    this.model = {}; // 存放所有值
    this.fields = []; // 存放所有FormItem实例
  }
  onFormSubmit = e => {
    e.preventDefault();
    // 统一校验
    this.fields.forEach(field => {
      field.validate();
    });
    const { onSubmit } = this.props;
    onSubmit(this.model);
  };
  render() {
    const { children } = this.props;
    const { onFormSubmit } = this;
    return (
      <form onSubmit={onFormSubmit}>
        <FormProvider value={this}>{children}</FormProvider>
      </form>
    );
  }
}

const noop = () => {};

Form.propTypes = {
  onSubmit: PropTypes.func
};

Form.defaulrProps = {
  onSubmit: noop
};
