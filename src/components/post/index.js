import React from 'react';
import Img from '../image';

class Post extends React.Component {

  render() {
    const { postMediaUrl } = this.props;
    return (
      <div className="post">
        <div className="postMedia">
          <Img src={postMediaUrl} onload={() => console.log('loaded')} onerror={() => console.log('error')} />
        </div>
        <div className="postContent"></div>
        <div className="postFooter"></div>
      </div>
    );
  }
}

export default Post;