/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/26
 */

import React from "react";
import { findDOMNode } from "react-dom";
import Tooltip from "../components/rc-tooltip";

class Tooltip_test extends React.Component {
  state = {
    visible: false
  };
  handleCloseTootip = () => {
    this.setState({ visible: false });
  };

  onVisibleChange = val => {
    this.setState({ visible: val });
  };
  render() {
    return (
      <Tooltip
        visible={this.state.visible}
        onVisibleChange={this.onVisibleChange}
        overlay={
          <div
            style={{
              backgroundColor: "red",
              display: "inline-block",
              width: "100px",
              height: "100px"
            }}
          >
            <span onClick={this.handleCloseTootip}>info</span>
          </div>
        }
      >
        <button>trig</button>
      </Tooltip>
    );
  }
}

export default Tooltip_test;
