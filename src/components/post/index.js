import React from 'react';
import Img from '../image';

import Loading from '../loading';
import { Button } from '../button';

import styles from './Post.module.css';


const PostMeida = ({ postUrl, postMediaUrl, loading, loadFailed }) => {
  return (
    <div className={styles.postMedia}>
      <a href={postUrl}>
        <Img
          src={postMediaUrl}
          Loading={loading}
          LoadFailed={loadFailed}>
        </Img>
      </a>
    </div>
  );
}


const PostContent = ({ postUrl, postTitle, postDate, postBrief }) => {
  return (
    <div className={styles.postContent}>
      <h1 className={styles.title}>
        <a href={postUrl}>{postTitle}</a>
      </h1>
      <time className={styles.date}>{postDate}</time>
      <p className={styles.brief}>{postBrief}</p>
    </div>
  );
}

class Post extends React.Component {

  render() {
    const { postMediaUrl, postTitle, postDate, postBrief, postUrl } = this.props;
    return (
      <div className={styles.postContainer}>
        <div className={styles.post}>
          <PostMeida
            postMediaUrl={postMediaUrl}
            postUrl={postUrl}
            loading={Loading}
            loadFailed={Loading} />

          <PostContent
            postTitle={postTitle}
            postUrl={postUrl}
            postDate={postDate}
            postBrief={postBrief}
          />
        </div >
        <div className={styles.postFooter}>
          <Button
            className={styles.permalink}
            text="阅读全文"
            href={postUrl}></Button>
        </div>

      </div>
    );
  }
}

export default Post;