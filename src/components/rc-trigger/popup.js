/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-26
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Popup extends Component {
  render() {
    const { children, onMouseDown } = this.props;
    return React.createElement("div", { onMouseDown }, children);
  }
}

Popup.propTypes = {
  children: PropTypes.node,
  point: PropTypes.shape({
    pageX: PropTypes.number,
    pageY: PropTypes.number
  }),
  onMouseDown: PropTypes.func // 点击 popup 的这个事件就交给 popup 绑定
};
