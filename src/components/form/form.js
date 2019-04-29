/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/29
 */

import React, { Component } from "react";
import createBaseForm from "../rc-form/createBaseForm";
import createFormField from "../rc-form/createFormField";
export default class Form extends Component {
  static create(options) {
    return createBaseForm({ ...options });
  }
  static createFormField(field) {
    return createFormField(field);
  }
  renderForm() {
    // return <form />;
    return React.createElement("form", {}, this.props.children);
  }
  render() {
    return this.renderForm();
  }
}
