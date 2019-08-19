import React from 'react';
import Img from '../image';

import Loading from '../loading';

import styles from './Post.module.css';

class Post extends React.Component {

  render() {
    const { postMediaUrl } = this.props;
    return (
      <div className={styles.post}>
        <div className={styles.postMedia}>
          <Img src={postMediaUrl} loading={Loading} />
        </div>
        <div className={styles.postContent}></div>
        <div className={styles.postFooter}></div>
      </div>
    );
  }
}

export default Post;