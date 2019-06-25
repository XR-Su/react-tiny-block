import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "../index";
import Input from "../../input";
import Checkbox from "../../checkbox";

enzyme.configure({ adapter: new Adapter() });

const { Item } = Form;

describe("form test", () => {
  it("render form when input", () => {
    const onSubmit = jest.fn();
    const wrapper = enzyme.mount(
      <Form onSubmit={onSubmit}>
        <Item name="input_item">
          <Input />
        </Item>
        <Item name="check_item">
          <Checkbox />
        </Item>
        <button id="submit_btn" type="submit">
          submit
        </button>
      </Form>
    );
    wrapper
      .find("Input input")
      .simulate("change", { target: { value: "input" } });
    wrapper
      .find("Checkbox input")
      .simulate("change", { target: { checked: true } });
    wrapper.find("form").simulate("submit");
    expect(onSubmit).toBeCalledWith({
      input_item: "input",
      check_item: true
    });

    wrapper
      .find("IForm")
      .instance()
      .setFieldsValue({ input_item: "567", check_item: false });
    wrapper.find("form").simulate("submit");
    expect(onSubmit).toBeCalledWith({
      input_item: "567",
      check_item: false
    });
  });
});
