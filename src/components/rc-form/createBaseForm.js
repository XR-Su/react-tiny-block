/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/29
 */

import React, { Component } from "react";
import createFieldsStore from "./createFieldsStore";

const _initialise = _this => {
  _this.getForm = () => ({
    getFieldDecorator: _this.getFieldDecorator.bind(_this) // bind ??
  });
};

const createBaseForm = (...args) => {
  let option = args.length > 0 && args[0] !== undefined ? args[0] : {};
  let mapPropsToFields = option.mapPropsToFields;
  return WrappedComponent => {
    class Form extends Component {
      constructor(props) {
        super(props);
        _initialise(this);
        let fields = mapPropsToFields && mapPropsToFields(this.props);
        this.fieldsStore = createFieldsStore(fields || {});
      }
      // 实现输入组件与表单 Form 的双向数据绑定
      getFieldDecorator(name, fieldOption) {
        this.getFieldProps(name, fieldOption);
        return fieldElem => {
          let fieldMeta = this.fieldsStore.getFieldMeta(name);
          // let fieldMeta = this.fieldsStore.fieldsMeta[name];
          debugger;
          return React.cloneElement(fieldElem, {
            ...this.fieldsStore.getFieldValuePropValue(fieldMeta)
          });
        };
      }
      getFieldProps(name, ...args) {
        let fieldOption = {
          name,
          valuePropName: "value",
          validate: [],
          ...args[0]
        };
        let meta = { ...fieldOption };
        this.fieldsStore.setFieldMeta(name, meta);
      }
      render() {
        let formProps = { form: this.getForm() };
        return React.createElement(WrappedComponent, { ...formProps });
      }
    }
    return Form;
  };
};

export default createBaseForm;
