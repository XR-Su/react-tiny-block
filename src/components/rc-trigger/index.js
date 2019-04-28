/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/26
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Portal from "../rc-util/portal";
import Popup from "./popup";
import { setDomStyle, containDomNode } from "utils";

const noop = () => {};

/**
 * @desc 对props进行的一些加工？
 * @param _this
 * @private
 */
let _initialiseProps = _this => {
  /** 事件 **/
  _this.onClick = event => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    _this.setPopupVisible(!_this.state.popupVisible, event);
  };

  _this.onDocumentClick = event => {
    const container = _this.getTriggerDomNode();
    const target = event.target;

    // 如果点击的位置是 popup 上或者 trigger 上，不关闭弹框
    if (!containDomNode(target, container) && !_this.hasPopupMouseDown) {
      _this.close();
    }
  };

  _this.onPopupMouseDown = () => {
    // 设置属性，让 document 接收到事件后不做关闭弹框处理
    _this.hasPopupMouseDown = true;
    clearTimeout(_this.mouseDownTimeout);
    _this.mouseDownTimeout = setTimeout(() => {
      _this.hasPopupMouseDown = false;
    }, 0);
  };

  /** set **/
  // 控制 popover 显示
  _this.setPopupVisible = (popupVisible, event) => {
    const _props = _this.props;
    const { popupVisible: oldPopupVisible } = _this.state;

    if (oldPopupVisible !== popupVisible) {
      if (!("popupVisible" in _props)) {
        _this.setState({ popupVisible: popupVisible });
      }
      _props.onPopupVisibleChange(popupVisible);
    }

    if (event) {
      _this.setPoint(event);
    }
  };

  // 设置显示点
  _this.setPoint = point => {
    const alignPoint = _this.props.alignPoint;
    if (!alignPoint || !point) return;
    _this.setState({
      point: {
        pageX: point.pageX,
        pageY: point.pageY
      }
    });
  };

  /** portal **/
  // 获取 portal 挂载内容
  _this.getComponent = () => {
    const { popup } = _this.props;
    const { popupVisible, point } = _this.state;
    // console.log(_this.triggerDomNode);
    return React.createElement(
      Popup,
      {
        point: point,
        visible: popupVisible,
        onMouseDown: _this.onPopupMouseDown,
        getTriggerDomNode: _this.getTriggerDomNode,
        ref: _this.savePopup
      },
      typeof popup === "function" ? popup() : popup
    );
  };

  // 获取 portal 挂载容器
  _this.getContainer = () => {
    const popupContainer = document.createElement("div");
    const style = {
      position: "absolute",
      top: "0px",
      left: "0",
      width: "100%"
    };
    setDomStyle(popupContainer, style);

    const mountNode = window.document.body;
    mountNode.appendChild(popupContainer);

    return popupContainer;
  };

  _this.getTriggerDomNode = () => {
    return _this.triggerDomNode;
  };

  _this.savePopup = node => {
    _this.savedPopup = node;
  };
};

export default class Trigger extends Component {
  constructor(props) {
    super(props);
    _initialiseProps(this);
    let popupVisible;
    if ("popupVisible" in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    this.state = {
      popupVisible
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // 不能放在 DidMount 里，因为第一次进来 popVisible 一般为 false
    const state = this.state;
    if (state.popupVisible) {
      this.clickOutsideHandler = window.document.addEventListener(
        "mousedown",
        this.onDocumentClick
      );
    }
  }

  componentWillUnmount() {
    this.clearOutsideHandler();
  }

  static getDerivedStateFromProps(nextProps, preState) {
    const { popupVisible } = nextProps;
    if (popupVisible !== undefined) {
      return { popupVisible };
    }
    return {};
  }

  clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }
  }
  close() {
    this.setPopupVisible(false);
  }
  render() {
    const { children } = this.props;
    const { popupVisible } = this.state;
    const child = React.Children.only(children);

    let newChildProps = { key: "trigger" };
    newChildProps.onClick = this.onClick;
    newChildProps.ref = node => (this.triggerDomNode = node);

    const trigger = React.cloneElement(child, newChildProps);

    // let portal = null;
    let portal = void 0;
    if (popupVisible || this.savedPopup) {
      // portal = ReactDOM.createPortal(this.getComponent(), this.getContainer());
      // 在 portal 组件中，会在 portal unmount 时做处理；
      // 这里必须传的是函数，而不是 getContainer(),如果是函数调用的话，则每次都会新创建一个 container 挂载到 body 下；
      portal = React.createElement(
        Portal,
        // { container: this.getContainer(), key: "portal" },
        { getContainer: this.getContainer, key: "portal" },
        this.getComponent()
      );
    }
    return [trigger, portal];
  }
}

Trigger.proptypes = {
  popup: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  onPopupVisibleChange: PropTypes.func,
  popupVisible: PropTypes.bool,
  defaultPopupVisible: PropTypes.bool
};

Trigger.defaultProps = {
  defaultPopupVisible: false,
  onPopupVisibleChange: noop
};
