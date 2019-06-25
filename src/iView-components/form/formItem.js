/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-05-02
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import FormContext from "./formContext";

const _initialise = _this => {
  _this.validate = (trigger, callback) => {
    const { name, rules } = _this.props;
    const form = _this.context;
    console.log("check:", name, "value:", form.model[name]);
  };
};

class FormItem extends Component {
  static contextType = FormContext;
  constructor(props) {
    super(props);
    _initialise(this);
  }
  componentDidMount() {
    // this.props.form_demo.addFormItem(this);
    const {
      context: form,
      props: { name }
    } = this;
    form.addFormItem(name, this);
  }
  /**
   * 输入组件失去焦点时触发
   */
  onFieldBlur = () => {
    this.validate("blur");
  };
  /**
   * 输入组件值改变时触发
   * @param value
   */
  onFieldChange = value => {
    const { name } = this.props;
    const form = this.context;
    form.model[name] = value;
  };
  renderFormItem = () => {
    const { children, name } = this.props;
    const { onFieldBlur, onFieldChange, context: form } = this;
    const value = form && form.model[name]; // get the value from model
    // console.log("item value", value);
    let child = React.Children.only(children);
    child =
      child.type == "button"
        ? child
        : React.cloneElement(child, {
            ...{
              onBlur: onFieldBlur,
              onChange: onFieldChange,
              value: value || ""
            }
          });
    return (
      <div>
        <label htmlFor="">{name}</label>
        <div>{child}</div>
      </div>
    );
  };
  render() {
    return this.renderFormItem();
  }
}

export default FormItem;

FormItem.propTypes = {
  name: PropTypes.string,
  rules: PropTypes.object
};

FormItem.defaultProps = {
  name: ""
};
