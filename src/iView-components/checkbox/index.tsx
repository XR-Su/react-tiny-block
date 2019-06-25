import React, { Component } from "react";
import CheckboxItem from "./checkbox";
import CheckboxGroup from "./checkboxGroup";

/**
 * @name checkbox
 */
export interface CheckboxProps {
  label?: string;
  value?: string | number | boolean;
  trueValue?: string | number | boolean;
  falseValue?: string | number | boolean;
  disabled?: boolean;
  onChange?: (val: boolean) => void;
}

class ICheckbox extends Component<CheckboxProps, {}> {
  static Group: typeof Group;
  render() {
    return React.createElement(CheckboxItem, { ...this.props });
  }
}

/**
 * @name checkbox group
 */
export interface GroupProps {
  defaultValues?: string[];
  onChange?: (vals: string[]) => void;
}

class Group extends Component<GroupProps, {}> {
  render() {
    return React.createElement(CheckboxGroup, { ...this.props });
  }
}

ICheckbox.Group = Group;
export default ICheckbox;
