/**
 * @Name: tooltip
 * @Description:
 * @author RiSusss
 * @date 2019-04-27
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Content from "./content";
import Trigger from "../rc-trigger";

const initialiseProps = _this => {
  _this.getPopupElement = () => {
    const _props = _this.props;
    const { overlay, prefixCls } = _props;
    return [
      React.createElement(
        "div",
        {
          className: prefixCls + "-arrow",
          key: "arrow"
        },
        React.createElement(Content, { key: "content", prefixCls, overlay })
      )
    ];
  };
};

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    initialiseProps(this);
  }
  render() {
    const _props = this.props;
    const { children } = _props;
    return React.createElement(
      Trigger,
      { popup: this.getPopupElement() },
      children
    );
  }
}

Tooltip.defaultProps = {
  prefixCls: "rc-tooltip"
};

Tooltip.propTypes = {
  overlay: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};
