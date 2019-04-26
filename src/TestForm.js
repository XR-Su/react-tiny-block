import React, {Component} from 'react'
import {Button} from 'antd'
// import './test.less'

class TestForm extends Component {
  state = {
    name: '111'
  }
  handleClick = () => {
    alert(this.state.name)
  }
  render() {
    return (
      <div className="test">test
        <Button onClick={this.handleClick}>testesst</Button>
      </div>
    )
  }
}

export default TestForm