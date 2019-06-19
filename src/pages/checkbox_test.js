/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-06-18
 */
import React, { Component } from "react";
import Checkbox from "../iView-components/checkbox";

const { Group } = Checkbox;

export default class extends Component {
  onCheckboxChange = vals => {
    console.log(vals);
  };
  render() {
    return (
      <div>
        <Group onChange={this.onCheckboxChange}>
          <Checkbox label={"aa"} />
          <Checkbox label={"bb"} />
          <Checkbox label={"cc"} />
        </Group>
        <Checkbox label={"single"} onChange={this.onCheckboxChange}/>
      </div>
    );
  }
}
