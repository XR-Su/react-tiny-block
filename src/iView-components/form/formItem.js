/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-05-02
 */
import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import FormContext from "./formContext";

const _initialise = _this => {
  _this.validate = (trigger, callback) => {
    const { name, rules, form } = _this.props;
    console.log("check:", name, "value:", form.model[name]);
  };
};

class FormItem extends Component {
  constructor(props) {
    super(props);
    _initialise(this);
  }
  componentDidMount() {
    this.props.form_demo.addFormItem(this);
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
    const { form, name } = this.props;
    form.model[name] = value;
  };
  renderFormItem = () => {
    const { children, name } = this.props;
    const { onFieldBlur, onFieldChange } = this;
    let child = React.Children.only(children);
    child =
      child.type == "button"
        ? child
        : React.cloneElement(child, { ...{ onFieldBlur, onFieldChange } });
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

const FormItemWrapper = props => {
  const form = useContext(FormContext);
  return <FormItem {...props} {...{ form }} />;
};

export default FormItemWrapper;

FormItem.propTypes = {
  name: PropTypes.string,
  rules: PropTypes.object
};

FormItem.defaultProps = {
  name: ""
};
