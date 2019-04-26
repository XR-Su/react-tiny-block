import React, { Component } from 'react'
import { Form } from 'antd'

class Normal_form extends Component {
  handleSubmit = e => {
    const { submit } = this.props
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        submit(values)
      }
    })
  }
  createFormItems = () => {
    const {
      form: { getFieldDecorator },
      formItems,
      formItemLayout
    } = this.props
    return formItems.map((item, index) => {
      const render =
        typeof item.render === 'function' ? item.render() : item.render
      const { itemMargin } = this.props
      const style = { marginBottom: `${itemMargin}px` }
      if (item.name === 'submit') {
        return (
          <Form.Item style={item.style} key={item.key}>
            {render}
          </Form.Item>
        )
      } else {
        return (
          <Form.Item
            style={style}
            label={item.label}
            {...formItemLayout}
            key={item.key}
          >
            {item.type == 'text'
              ? render
              : getFieldDecorator(item.name, item.options || {})(render)}
            {item.tip !== undefined ? item.tip : null}
          </Form.Item>
        )
      }
    })
  }
  render() {
    const { className } = this.props
    return (
      <div className={className || ''}>
        {/* <Form onSubmit={this.handleSubmit}>{this.createFormItems()}</Form> */}
        <Form onSubmit={this.handleSubmit}></Form>
      </div>
    )
  }
}

Normal_form.defaultProps = {
  itemMargin: 10,
  formItemLayout: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  },
  formItems: [],
  form: {}
}

export default Form.create({ name: 'deliver' })(Normal_form)
