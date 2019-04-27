/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/26
 */

import React from "react";
import Tooltip from "../components/rc-tooltip";

class Test extends React.Component {
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
          <span
            onClick={this.handleCloseTootip}
            style={{
              backgroundColor: "red",
              display: "inline-block",
              width: "100px",
              height: "100px"
            }}
          >
            info
          </span>
        }
      >
        <button>trig</button>
      </Tooltip>
    );
  }
}

export default Test;
