/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/5/6
 */

/**
 * 核心：
 * 1.展开与关闭的按钮（+或-）；
 * 2.多选框；
 * 3.节点标题；
 * 4.递归子节点；
 */
import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import Checkbox from "../checkbox/checkbox";
import TreeContext from "./treeContext";
import "./style/index.less";

const _initialise = _this => {
  _this.updateTreeDown = (checked, callback) => {
    _this.setState(
      preState => ({ data: { ...preState.data, checked } }),
      () => {
        callback && callback();
      }
    );
    _this.childNodes.length !== 0 &&
      _this.childNodes.forEach(child => {
        child.updateTreeDown(checked);
      });
  };
  _this.getAllChildNodes = () => {
    const { data } = _this.state;
    const nodes = [];
    const queue = [];
    let head = data;
    nodes.push(head);
    queue.push(head);
    // 广度优先遍历
    while (queue.length !== 0) {
      const head = queue.shift();
      head.children &&
        head.children.forEach(child => {
          nodes.push(child);
          queue.push(child);
        });
    }
    return nodes;
  };
  _this.addChildNode = child => {
    _this.childNodes.push(child);
  };
};

class TreeNode extends Component {
  constructor(props) {
    super(props);
    _initialise(this);
    this.state = {
      data: { ...props.data, checked: props.data.checked == true }
    };
    this.parentNode = props.parentNode;
    this.childNodes = [];
  }
  handleExpand = () => {
    const { treeStore } = this.props;
    this.setState(preState => ({
      data: { ...preState.data, expand: !preState.data.expand }
    }));
    treeStore.onExpand(this.state.data);
  };
  handleCheck = checked => {
    const { treeStore } = this.props;
    const nodes = this.getAllChildNodes();
    this.updateTreeDown(checked, () => {
      // 子元素跟新完毕后，通知父元素，父元素判断如果自己的子元素全部选中，那么自己也选中
      this.parentNode && this.parentNode.onChildCheck();
    });
    treeStore.onCheck(nodes);
  };
  onChildCheck = () => {
    const isCheckedAll = this.childNodes.every(
      child => child.state.data.checked
    );
    this.setState(preState => ({
      data: { ...preState.data, checked: isCheckedAll }
    }));
  };
  renderExpandItem = () => {
    const { data } = this.state;
    const isShowExpand = data.children && data.children.length && !data.expand;
    const isShowRetract = data.children && data.children.length && data.expand;
    return (
      <span onClick={this.handleExpand} className="switcher">
        {isShowExpand ? <span>+</span> : null}
        {isShowRetract ? <span>-</span> : null}
      </span>
    );
  };
  renderTreeNodes = () => {
    const { treeStore, showCheckbox } = this.props;
    const {
      data: { children, expand }
    } = this.state;
    return (
      <ul>
        {children &&
          children.map((child, index) => (
            <li key={index}>
              <TreeNode
                data={child}
                parentNode={this}
                isShow={expand == undefined ? false : expand}
                {...{ showCheckbox, treeStore }}
                ref={this.addChildNode}
              />
            </li>
          ))}
      </ul>
    );
  };
  render() {
    const { renderExpandItem, renderTreeNodes, handleCheck } = this;
    const { data } = this.state;
    const { showCheckbox, isShow } = this.props;
    return (
      <div style={isShow ? {} : { display: "none" }}>
        {renderExpandItem()}
        {showCheckbox ? (
          <Checkbox value={data.checked} onChange={handleCheck} />
        ) : null}
        <span>{data.title}</span>
        {renderTreeNodes()}
      </div>
    );
  }
}

const TreeNodeWrapper = props => {
  const treeStore = useContext(TreeContext);
  return <TreeNode {...{ treeStore }} {...props} />;
};

export default TreeNodeWrapper;

const noop = () => {};

TreeNode.propTypes = {
  data: PropTypes.object,
  showCheckbox: PropTypes.bool
};

TreeNode.defaultProps = {
  data: [],
  showCheckbox: true,
  isShow: true,
  parentNode: null
};
