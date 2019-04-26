/**
 * @Name:
 * @Description: 
 * @author RiSusss
 * @date 2019/4/26
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {setDomStyle} from "utils";

const noop = () => {}

let _initialiseProps = _this => {
    /** 事件 **/
    _this.onClick = event => {
        if (event && event.preventDefault) {
            event.preventDefault();
        }

        _this.setPopupVisible(!_this.state.popupVisible, event)
    }

    // 控制 popover 显示
    _this.setPopupVisible = (popupVisible, event) => {
        const _props = _this.props

        if (!('popupVisible' in _props)) {
            _this.setState({ popupVisible: popupVisible });
        }
        _props.onPopupVisibleChange(popupVisible);

        if (event) {
            _this.setPoint(event);
        }
    }

    // 设置显示点
    _this.setPoint = (point) => {
        const alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;
        _this.setState({
            point: {
                pageX: point.pageX,
                pageY: point.pageY
            }
        });
    }

    /** portal **/
    // 获取 portal 挂载内容
    _this.getComponent = () => {
        return React.createElement("p",{},'pppppp')
    }

    // 获取 portal 挂载容器
    _this.getContainer = () => {
        const popupContainer = document.createElement('div')
        const style = {position: 'absolute', top: '100px', left: '0', width: '100%'}
        setDomStyle(popupContainer, style)

        const mountNode = window.document.body
        mountNode.appendChild(popupContainer)

        return popupContainer
    }
}
export default class Trigger extends Component {
    constructor(props) {
        super(props)
        _initialiseProps(this)
        let popupVisible;
        if ('popupVisible' in props) {
            popupVisible = !!props.popupVisible;
        } else {
            popupVisible = !!props.defaultPopupVisible;
        }
        this.state = {
            popupVisible: popupVisible
        }
    }
    render() {
        const {children} = this.props
        const {popupVisible} = this.state
        const child = React.Children.only(children)
        let newChildProps = { key: 'trigger' }
        newChildProps.onClick = this.onClick
        const trigger = React.cloneElement(child, newChildProps)
        let portal = null
        if (popupVisible) {
            portal = ReactDOM.createPortal(this.getComponent(), this.getContainer())
        }
        return [trigger,portal]
    }
}

Trigger.defaultProps = {
    defaultPopupVisible: false,
    onPopupVisibleChange: noop
}