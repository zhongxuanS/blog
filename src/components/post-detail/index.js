import React from 'react';
import axios from 'axios';
import styles from './PostDetail.module.css';

export default class PostDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      postContent: ''
    }

    this.createMarkup = this.createMarkup.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.post('/getPostDetailById', { id })
      .then(({ data }) => {
        const { isSuccess } = data;
        if (isSuccess) {
          const responseData = data.data;
          const postContent = responseData.content;
          this.setState({ postContent })
        } else {
          console.error('get post detail failed');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  createMarkup(postContent) {
    return { __html: postContent };
  }

  render() {
    const { postContent } = this.state;
    return (
      <div
        className={styles.postDetail}
        dangerouslySetInnerHTML={this.createMarkup(postContent)}></div>
    );
  }
}