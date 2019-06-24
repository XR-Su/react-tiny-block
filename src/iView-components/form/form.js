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
  _this.addFormItem = (name, item) => (_this.fields[name] = item);
};

class Form extends Component {
  constructor(props) {
    super(props);
    _initialise(this);
    this.model = {}; // 存放所有值
    // this.fields = []; // 存放所有FormItem实例
    this.fields = {}; // 存放所有FormItem实例
  }
  onFormSubmit = e => {
    e.preventDefault();
    // 统一校验
    // this.fields.forEach(field => {
    //   field.validate();
    // });
    let field;
    for (let key in this.fields) {
      field = this.fields[key];
      field.validate();
    }
    const { onSubmit } = this.props;
    onSubmit(this.model);
  };
  setFormFieldsValue = model => {
    let value;
    for (let key in model) {
      value = model[key];
      this.model[key] = value;
    }
    // console.log("model", this.model)
    this.forceUpdate();
  };
  render() {
    const { children } = this.props;
    const { onFormSubmit } = this;
    alert("rerender form");
    return (
      <form onSubmit={onFormSubmit}>
        <FormProvider value={this}>
          {/*{children}*/}
          {React.Children.map(children, child => React.cloneElement(child))}
        </FormProvider>
      </form>
    );
  }
}

export default Form;

const noop = () => {};

Form.propTypes = {
  onSubmit: PropTypes.func
};

Form.defaulrProps = {
  onSubmit: noop
};
