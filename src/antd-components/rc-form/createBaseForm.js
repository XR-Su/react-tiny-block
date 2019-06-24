/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/29
 */

import React, { Component } from "react";
import createFieldsStore from "./createFieldsStore";

const DEFAULT_TRIGGER = "onChange";

const _initialise = _this => {
  _this.getForm = () => ({
    getFieldDecorator: _this.getFieldDecorator.bind(_this), // bind ??
    setFields: _this.setFields.bind(_this)
  });
};

const createBaseForm = (...args) => {
  let option = args.length > 0 && args[0] !== undefined ? args[0] : {};
  let mapPropsToFields = option.mapPropsToFields;
  return WrappedComponent => {
    class RCForm extends Component {
      constructor(props) {
        super(props);
        _initialise(this);
        let fields = mapPropsToFields && mapPropsToFields(this.props);
        this.fieldsStore = createFieldsStore(fields || {});
      }
      getFieldDecorator(name, fieldOption) {
        // 实现输入组件与表单 Form 的双向数据绑定
        const inputProps = this.getFieldProps(name, fieldOption);
        return fieldElem => {
          let fieldMeta = this.fieldsStore.getFieldMeta(name);
          return React.cloneElement(fieldElem, {
            ...inputProps,
            ...this.fieldsStore.getFieldValuePropValue(fieldMeta) // 通过 valuePropName 属性，从fieldsStore.fields 中取出对应的 value 值
          });
        };
      }
      getFieldProps(name, ...args) {
        let fieldOption = {
          name,
          trigger: DEFAULT_TRIGGER,
          valuePropName: "value",
          validate: [],
          ...args[0]
        };
        let meta = { ...fieldOption };
        this.fieldsStore.setFieldMeta(name, meta);
        let action = fieldOption.trigger;
        const inputProps = {};
        inputProps[action] = this.getCacheBind(
          name,
          action,
          this.onCollectValidate
        );
        return inputProps;
      }
      getCacheBind(name, action, fn) {
        // 将输入组件的 onChange 方法与这里的 onCollect 方法绑定起来
        // if (!this.cachedBind[name]) {
        //   this.cachedBind[name] = {};
        // }
        return fn.bind(this, name, action);
      }
      onCollect() {
        // 收集输入组件变化后的值
      }
      onCollectValidate(name, action, ...args) {
        let newValue = args && args.length > 0 ? args[0] : {};
        this.fieldsStore.setFields({ [name]: { value: newValue } });
        // debugger;
      }
      setFields(fields, callback) {
        this.fieldsStore.setFields(fields);
        this.forceUpdate();
      }
      render() {
        let formProps = { form: this.getForm() };
        return React.createElement(WrappedComponent, { ...formProps });
      }
    }
    return RCForm;
  };
};

export default createBaseForm;
