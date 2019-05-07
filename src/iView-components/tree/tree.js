/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/5/6
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import TreeNode from "./node";
import { TreeProvider } from "./treeContext";

export default class Tree extends Component {
  onCheck = nodes => {console.log(nodes)};
  onExpand = node => {
    console.log(node);
  };
  renderTreeNodes = () => {
    const { data, showCheckBox } = this.props;
    return (
      <ul>
        {data.map((node, index) => (
          <li key={index}>
            <TreeNode data={node} showCheckBox={showCheckBox} />
          </li>
        ))}
      </ul>
    );
  };
  render() {
    const { renderTreeNodes, onExpand, onCheck } = this;
    return (
      <div className="rx-tree">
        <TreeProvider value={{ ...{ onExpand, onCheck } }}>
          {renderTreeNodes()}
        </TreeProvider>
      </div>
    );
  }
}

Tree.propTypes = {
  data: PropTypes.array,
  showCheckBox: PropTypes.bool
};

Tree.defaultProps = {
  data: []
};
