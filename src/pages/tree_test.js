import React, { Component } from "react";
// import CheckboxDemo from './demo/checkbox_demo'
// import AlertDemo from './demo/alert_demo'
import Tree from "../iView-components/tree/tree";

export default class TreeTest extends Component {
  constructor(props) {
    super(props);
  }
  data = [
    {
      title: "parent 1",
      expand: true,
      children: [
        {
          title: "parent 1-1",
          expand: true,
          children: [
            {
              title: "leaf 1-1-1"
            },
            {
              title: "leaf 1-1-2"
            }
          ]
        },
        {
          title: "parent 1-2",
          // expand: false,
          children: [
            {
              title: "leaf 1-2-1"
            },
            {
              title: "leaf 1-2-1"
            }
          ]
        }
      ]
    }
  ];
  onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };
  render() {
    return (
      <div>
        <Tree data={this.data} />
      </div>
    );
  }
}
