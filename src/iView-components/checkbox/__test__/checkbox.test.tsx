import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Checkbox from "../index";

enzyme.configure({ adapter: new Adapter() });

const { Group } = Checkbox;

describe("checkbox test", () => {
  it("render the checkbox when the checkbox is checked", () => {
    const onChange = jest.fn();
    const wrapper = enzyme.mount(
      <Checkbox label={"test"} onChange={onChange} />
    );

    wrapper.find("input").simulate("change", { target: { checked: true } });

    expect(onChange).toBeCalledWith(true);
  });
});

describe("checkbox group test", () => {
  it("render the checkboxGroup when the checkbox is checked", () => {
    const onChange = jest.fn();
    const wrapper = enzyme.mount(
      <Group onChange={onChange}>
        <Checkbox label={"test1"} />
        <Checkbox label={"test2"} />
      </Group>
    );

    wrapper.find("input").forEach(node => {
      node.simulate("change", { target: { checked: true } });
    });

    expect(onChange).toBeCalledWith(["test1", "test2"]);
  });
});
