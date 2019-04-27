/**
 * @Name: content
 * @Description:
 * @author RiSusss
 * @date 2019-04-27
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Content extends Component {
  render() {
    const _props = this.props;
    const { overlay, prefixCls } = _props;
    return React.createElement(
      "div",
      { className: prefixCls + "-inner" },
      typeof overlay === "function" ? overlay() : overlay
    );
  }
}

Content.propTypes = {
  prefixCls: PropTypes.string,
  overlay: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};
