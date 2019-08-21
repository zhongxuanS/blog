import React, { Component } from 'react';

import Header from './components/header';
import Nav from './components/nav';
import Carousel from './components/carousel';
import Post from './components/post';
import Widget from './components/widget';

import pic1 from './components/carousel/images/pic1.jpg';
import pic2 from './components/carousel/images/pic2.jpg';
import pic3 from './components/carousel/images/pic3.jpg';

import './App.css';

const PostList = [
  { id: '1', postMediaUrl: pic1, postTitle: 'title1', postDate: '2019年1月20日', postBrief: 'test1111', postUrl: '/' },
  { id: '2', postMediaUrl: pic2, postTitle: 'title2', postDate: '2019年2月20日', postBrief: 'test2222', postUrl: '/' },
  { id: '3', postMediaUrl: pic3, postTitle: 'title3', postDate: '2019年12月20日', postBrief: 'test3333', postUrl: '/' },
  { id: '4', postMediaUrl: pic1, postTitle: 'title4', postDate: '2019年11月20日', postBrief: 'test4444', postUrl: '/' },
];


class App extends Component {
  render() {
    const blogInfo = {
      blogTitle: 'szx9231',
      blogBranding: 'Way to Fun'
    };

    let postList = PostList.map(item => {
      return (
        <Post
          key={item.id}
          postMediaUrl={item.postMediaUrl}
          postTitle={item.postTitle}
          postDate={item.postDate}
          postBrief={item.postBrief}
          postUrl={item.postUrl} />);
    });

    return (
      <div>
        <Header blogInfo={blogInfo}></Header>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-md-8 main-content">
              <Carousel className="carousel" urlList={[{ id: 1, path: pic1 }, { id: 2, path: pic2 }, { id: 3, path: pic3 }]} />
              {postList}
            </div>

            <div className="col-md-4 siderbar">
              <Widget title="title">test</Widget>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default App;