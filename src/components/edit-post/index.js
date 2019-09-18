import 'braft-editor/dist/index.css';
import React from 'react';
import BraftEditor from 'braft-editor';
import { SubmitButton } from '../button';
import styles from './EditPost.module.css';
import axios from 'axios';

export default class BasicDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(''),
    outputHTML: '<p></p>'
  }

  componentDidMount() {
    this.isLivinig = true
  }

  componentWillUnmount() {
    this.isLivinig = false
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  handleSubmit = () => {
    const { outputHTML } = this.state;
    axios.post('/upinsertPost', { content: outputHTML })
      .then(({ data }) => {
        const { isSuccess } = data;
        if (isSuccess) {
          alert('submit success');
        } else {
          alert('submit failed');
        }
      })
      .catch(error => {
        alert('submit failed');
        console.error(error);
      });
  }


  render() {
    const { editorState } = this.state
    return (
      <div>
        <div className={styles.editorWrapper}>
          <BraftEditor
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
        <SubmitButton
          className={styles.submitBtn}
          text="Submit"
          onClick={this.handleSubmit} />
      </div>
    )

  }

}