/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/25
 */

import React, { Component } from "react";
import { notice } from "../iView-components/alert";
// import TooltipTest from "./tooltip_test";
// import TreeTest from "./tree_test";
// import TsCom from "./ts_page";
// import CheckBoxTest from "./checkbox_test";
import IFormTest from "./iForm_test";

export default class extends Component {
  handleAlert = () => {
    notice({
      content: "hello"
    });
  };
  handleRender = () => {
    this.form.handleRender();
  };
  render() {
    return (
      <div>
        {/*<RenderTest ref={node => (this.form = node)}>*/}
        {/*  <RenderInner />*/}
        {/*</RenderTest>*/}
        <IFormTest />
        {/*<button onClick={this.handleRender}>rerender</button>*/}
        {/*<button onClick={this.handleAlert} />*/}
      </div>
    );
  }
}
