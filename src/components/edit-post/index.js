import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import styles from './EditPost.module.css';
import { Form, Input, Button } from 'antd'

class EditPost extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(''),
    outputHTML: '<p></p>'
  }


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values.content.toHTML())
      }
    });  
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };


    return (
      <div className={styles.editorWrapper}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="文章标题" {...formItemLayout}>
            {getFieldDecorator('title', {
              rules: [{
                required: true,
                message: '请输入标题',
              }],
            })(
              <Input size="large" placeholder="请输入标题" />
            )}
          </Form.Item>
          <Form.Item label="文章内容" {...formItemLayout}>
            {
              getFieldDecorator('content', {
                rules: [{
                  required: true,
                  message: '请输入内容'
                }]
              })(
                <BraftEditor
                  className={styles.editor}
                  placeholder="请输入正文内容"
                />
              )
            }
          </Form.Item>

          <Form.Item label="密码" {...formItemLayout}>
            {
              getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: '请输入密码'
                }]
              })(
                <Input.Password size="large" placeholder="请输入密码" />
              )
            }
          </Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form>
      </div>
    )
  }
}

export default Form.create()(EditPost);