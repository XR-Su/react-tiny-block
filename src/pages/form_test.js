/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/29
 */

import React, { Component } from "react";
import Form from "../components/form/form";
class FormTest extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form>
          {getFieldDecorator("aaa", { initialValue: "123321" })(
            <input type="text" />
          )}
          {/*<input type="text" />*/}
        </Form>
      </div>
    );
  }
}

const mapPropsToFields = () => {
  let res = { aaa: Form.createFormField({ value: "12343321" }) };
  return res;
};

export default Form.create({ mapPropsToFields })(FormTest);
