import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from "../index";

enzyme.configure({ adapter: new Adapter() });

describe("input test", () => {
  it("render input when input", () => {
    const onChange = jest.fn();
    const wrapper = enzyme.mount(<Input onChange={onChange} />);

    wrapper.find("input").simulate("change", { target: { value: "test" } });
    expect(onChange).toBeCalledWith("test");
  });
});
