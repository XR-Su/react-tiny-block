import React, { Component } from "react";
import Form from "./form";
import FormItem from "./formItem";

export interface IFormItemProps {
  name: string;
  rules: object;
  ref?: any;
}

class IFormItem extends Component<IFormItemProps, {}> {
  render() {
    return React.createElement(FormItem, {
      ...this.props
    });
  }
}

export interface IFormProps {
  onSubmit?: (form: object) => void;
}

class IForm extends Component<IFormProps, {}> {
  static Item;
  form: any;
  setFieldsValue = model => {
    this.form.setFormFieldsValue(model);
  };
  render() {
    return React.createElement(Form, {
      ...this.props,
      ref: node => (this.form = node)
    });
  }
}

IForm.Item = IFormItem;

export default IForm;
