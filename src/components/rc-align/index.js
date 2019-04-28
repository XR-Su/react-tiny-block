/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/28
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { setDomStyle } from "utils";

const _initialiseProps = _this => {
  _this.forceAlign = () => {
    const source = _this.getPopupDomNode();
    const { target } = _this.props;
    const targetPoint = _this.getDomRegion(target);
    _this.doAlign(source, targetPoint);
  };
  _this.doAlign = (el, targetRegion, align) => {
    const elRegion = _this.getDomRegion(el);
    let newElRegion = {};
    newElRegion.top = (targetRegion.top + targetRegion.height).toFixed(0);
    newElRegion.left = (targetRegion.left + targetRegion.width / 2).toFixed(0);
    const style = {
      left: newElRegion.left + "px",
      top: newElRegion.top + "px",
      position: "absolute"
    };
    setDomStyle(el, style);
  };
  _this.getDomRegion = node => {
    const rect = node.getBoundingClientRect();
    return rect;
  };
  _this.getPopupDomNode = () => {
    return _this.popupDomNode;
  };
};

export default class Align extends Component {
  constructor(props) {
    super(props);
    _initialiseProps(this);
  }
  componentDidMount() {
    this.forceAlign();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.forceAlign();
  }

  render() {
    const { children } = this.props;
    return React.cloneElement(children, {
      ref: node => (this.popupDomNode = node)
    });
  }
}

Align.propTypes = {
  target: PropTypes.oneOfType([
    PropTypes.shape({
      clientX: PropTypes.number,
      clientY: PropTypes.number,
      pageX: PropTypes.number,
      pageY: PropTypes.number
    })
  ])
};

Align.defaultProps = {
  target: function target() {
    return window;
  }
};
