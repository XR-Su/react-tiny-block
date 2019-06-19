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
import CheckBoxTest from "./checkbox_test";

export default class extends Component {
  handleAlert = () => {
    notice({
      content: "hello"
    });
  };
  render() {
    return (
      <div>
        <CheckBoxTest />
        {/*<button onClick={this.handleAlert} />*/}
      </div>
    );
  }
}
