import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Alert from "../alert";

enzyme.configure({ adapter: new Adapter() });

describe("alert test", () => {
  it("render alert", () => {
    // const wrapper = enzyme.shallow(<Alert />);
    // wrapper.instance().add({ content: "hello" });
    // expect(wrapper.state("notices")).toHaveLength(1);
  });
});
