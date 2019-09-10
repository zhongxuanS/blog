import React from 'react';
import axios from 'axios';

import styles from './NotePad.module.css';

export default class NotePad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: ''
    }

    this.submitContent = this.submitContent.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  componentDidMount() {
    axios.post('/getLatestNotepad').then((data) => {
      const responseData = data.data;
      if (responseData.isSuccess) {
        const editorState = responseData.data;
        this.setState({ editorState });
      }
    });
  }

  submitContent(event) {
    event.preventDefault();
    const { editorState } = this.state;
    axios.post('/updateNotepad', { content: editorState });
  }

  handleEditorChange(event) {
    const editorState = event.target.value;
    this.setState({ editorState });
  }

  render() {
    const { editorState } = this.state

    return (
      <form
        className={styles.notepad}
        onSubmit={this.submitContent}>
        <textarea
          value={editorState}
          onChange={this.handleEditorChange}
        />
        <input type="submit" value="Submit" />
      </form>
    )

  }
}