import React from "react";
import enzyme from "enzyme";
import Checkbox from "../index";
import Adapter from "enzyme-adapter-react-16";
// import Checkbox from "../checkbox";

enzyme.configure({ adapter: new Adapter() });

it("render the checkbox when the checkbox is checked", () => {
  const onChange = jest.fn();
  const Check = enzyme.shallow(<Checkbox label={"test"} onChange={onChange} />);
  Check.simulate("click");
  expect(onChange).toBeCalledWith(true);
});
