/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/29
 */

const _initiliseProps = _this => {
  _this.setFieldsInitialValue = initialValues => {};
};

class FieldsStore {
  constructor(fields) {
    this.fields = fields || {}; // 主要存放输入组件的名称和值
    this.fieldsMeta = {}; // 主要存放输入组件的名称和验证规则（rules）、原props属性（originalProps）、触发器（trigger）、映射的值（valuePropName）、初始值（initialValue）
  }
  setFieldMeta(name, meta) {
    this.fieldsMeta[name] = meta;
  }
  getFieldMeta(name) {
    this.fieldsMeta[name] = this.fieldsMeta[name] || {};
    return this.fieldsMeta[name];
  }
  getFieldValuePropValue(fieldMeta) {
    // 以 propsValue 的名称来添加 value 值
    let { name, valuePropName } = fieldMeta;
    let field = this.getField(name);
    let fieldValue = "value" in field ? field.value : fieldMeta.initialValue;

    return { [valuePropName]: fieldValue };
  }
  setFields(fields) {
    let nowFields = { ...this.fields, ...fields };
    this.fields = nowFields;
  }
  getField(name) {
    return this.fields[name];
  }
}

export default fields => new FieldsStore(fields);
