/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-26
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Align from "../rc-align";

const _initialiseProps = _this => {
  _this.getAlignTarget = () => {
    const { point, getTriggerDomNode } = _this.props;
    if (point) {
      return point;
    }
    return getTriggerDomNode();
  };
};

export default class Popup extends Component {
  constructor(props) {
    super(props);
    _initialiseProps(this);
  }
  render() {
    const { children, onMouseDown, visible } = this.props;
    return React.createElement(
      "div",
      {},
      visible
        ? React.createElement(
            Align,
            { target: this.getAlignTarget() },
            React.createElement("div", { onMouseDown }, children)
          )
        : null
    );
  }
}

Popup.propTypes = {
  children: PropTypes.node,
  point: PropTypes.shape({
    pageX: PropTypes.number,
    pageY: PropTypes.number
  }),
  onMouseDown: PropTypes.func, // 点击 popup 的这个事件就交给 popup 绑定i
  getTriggerDomNode: PropTypes.func,
  visible: PropTypes.bool
};
