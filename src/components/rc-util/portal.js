/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/28
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class Portal extends Component {
  componentDidMount() {
    this.createContainer();
  }

  componentWillUnmount() {
    this.removeContainer();
  }
  createContainer = () => {
    const { getContainer } = this.props;
    // const { container } = this.props;
    this.container = getContainer();
    // this.container = container;
    this.forceUpdate();
  };
  removeContainer = () => {
    const { container } = this;
    if (container) {
      container.parentNode.removeChild(container);
    }
  };
  render() {
    const { children } = this.props;
    const { container } = this;
    if (container) {
      return ReactDOM.createPortal(children, container);
    }
    return null;
  }
}

Portal.propTypes = {
  // container: PropTypes.object.isRequired,
  getContainer: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
