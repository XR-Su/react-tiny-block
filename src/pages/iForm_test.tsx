/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-06-24
 */
import React, { Component } from "react";
import Form from "../iView-components/form";
import Checkbox from "../iView-components/checkbox";
import Input from "../iView-components/input";
// import Form from "../iView-components/form/form";
// import Item from "../iView-components/form/formItem";

const { Item } = Form;

export default class extends Component {
  form: any;
  componentDidMount() {}
  onReset = model => {
    this.form.setFieldsValue({
      test_form_input: "567",
      test_form_check: true
    });
  };
  onSubmit = model => {
    console.log("model:", model);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} ref={node => (this.form = node)}>
          <Item name="test_form_input">
            <Input />
          </Item>
          <Item name="test_form_check">
            <Checkbox />
          </Item>
          <button type="submit">submit</button>
          {/*<button onClick={this.onReset}>reset</button>*/}
          <a href="#" onClick={this.onReset}>
            reset
          </a>
        </Form>
      </div>
    );
  }
}
