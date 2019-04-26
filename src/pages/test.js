/**
 * @Name:
 * @Description: 
 * @author RiSusss
 * @date 2019/4/26
 */

import React from 'react'

class Trigger extends React.Component {
    render() {
        const _props = this.props
        console.log(React.Children.only(_props.children))
        console.log(_props.children)
        let portal = React.createElement(
          'span',
          {className: 'testTrigger', key: '123'},
          '123'
        )
        let portal2 = React.createElement(
          'span',
          {className: 'testTrigger', key: '321'},
          '321'
        )
        return [portal,portal2]
    }
}

export default Trigger