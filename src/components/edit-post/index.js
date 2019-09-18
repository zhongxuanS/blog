import 'braft-editor/dist/index.css';
import React from 'react';
import BraftEditor from 'braft-editor';

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


  render() {
    const { editorState } = this.state
    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )

  }

}