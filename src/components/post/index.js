import React from 'react';
import Img from '../image';

import Loading from '../loading';
import Button from '../button';

import styles from './Post.module.css';

class Post extends React.Component {

  render() {
    const { postMediaUrl } = this.props;
    return (
      <div className={styles.postContainer}>
        <div className={styles.post}>

          <div className={styles.postMedia}>
            <a href="/">
              <Img
                src={postMediaUrl}
                Loading={Loading}
                LoadFailed={Loading}>
              </Img>
            </a>
          </div>

          <div className={styles.postContent}>
            <h1 className={styles.title}>
              <a href="/">史上最全的Webstorm快捷键及技巧</a>
            </h1>
            <time className={styles.date}>2019年8月19日</time>
            <p className={styles.brief}>Webstorm是一款前端开发神器，此文介绍webstorm的快捷键和技巧分享。 所谓工欲善其事，必先利其器嘛，想着如果要提高开发效率，那掌握一些常用的快捷键应该是少不了的，所以把webstorm快捷键及技巧分享给大家。持续更新中</p>
          </div>

        </div >

        <div className={styles.postFooter}>
          <Button className={styles.permalink} text="阅读全文" href="/"></Button>
        </div>

      </div>
    );
  }
}

export default Post;