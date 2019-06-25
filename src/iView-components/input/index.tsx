/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-06-24
 */
import React, { Component } from "react";
import Input from "./input";

export interface IInputProps {
  value?: string;
  onBlur?: () => void;
  onChange?: (val: string) => void;
}

class IInput extends Component<IInputProps, {}> {
  render() {
    return React.createElement(Input, { ...this.props });
  }
}

export default IInput;
