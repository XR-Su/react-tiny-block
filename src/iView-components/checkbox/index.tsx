import React, { Component } from "react";
import CheckboxItem from "./checkbox";
import CheckboxGroup from "./checkboxGroup";

export interface CheckboxProps {
  label: string;
  disabled?: boolean;
  onChange?: (val: boolean) => void;
}

class Checkbox extends Component<CheckboxProps, {}> {
  static Group: typeof Group;
  render() {
    return React.createElement(CheckboxItem, { ...this.props });
  }
}

export interface GroupProps {
  defaultValues?: string[];
  onChange?: (vals: string[]) => void;
}

class Group extends Component<GroupProps, {}> {
  render() {
    return React.createElement(CheckboxGroup, { ...this.props });
  }
}

// Checkbox.Group = Group;
export default Checkbox;
