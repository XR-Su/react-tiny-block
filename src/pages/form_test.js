/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/29
 */

import React, { Component } from "react";
import Form from "../components/form/form";
import TestInput from "./input_test";
class FormTest extends Component {
  handleChange = () => {
    this.props.form.setFields({ aaa: { value: "bbbbb" } });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form>
          {getFieldDecorator("aaa", { initialValue: "123321" })(<TestInput />)}
          {/*<input type="text" />*/}
        </Form>
        {/*<TestInput />*/}
        <button onClick={this.handleChange}>change</button>
      </div>
    );
  }
}

const mapPropsToFields = () => {
  let res = { aaa: Form.createFormField({ value: "12343321" }) };
  return res;
};

export default Form.create({ mapPropsToFields })(FormTest);
