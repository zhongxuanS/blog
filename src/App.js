import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';

import Header from './components/header';
import Nav from './components/nav';
import Carousel from './components/carousel';
import Post from './components/post';
import Widget from './components/widget';
import Search from './components/search';
import Notification from './components/notification';
import Social from './components/social';
import Category from './components/category';
import Archive from './components/archive';

import pic1 from './components/carousel/images/pic1.jpg';
import pic2 from './components/carousel/images/pic2.jpg';
import pic3 from './components/carousel/images/pic3.jpg';

import './App.css';

library.add(fab, fas);

const PostList = [
  { id: '1', postMediaUrl: pic1, postTitle: 'title1', postDate: '2019年1月20日', postBrief: 'test1111', postUrl: '/' },
  { id: '2', postMediaUrl: pic2, postTitle: 'title2', postDate: '2019年2月20日', postBrief: 'test2222', postUrl: '/' },
  { id: '3', postMediaUrl: pic3, postTitle: 'title3', postDate: '2019年12月20日', postBrief: 'test3333', postUrl: '/' },
  { id: '4', postMediaUrl: pic1, postTitle: 'title4', postDate: '2019年11月20日', postBrief: 'test4444', postUrl: '/' },
];


const NotificationList = [
  { id: 1, category: '支持我', link: '/', title: 'star一下' },
  { id: 2, category: '主题使用', link: '/', title: '常见问题' }
];

const SocialList = [
  { id: 1, fontAweIconPrefix: 'fab', fontAweIconName: 'qq', href: '/' },
  { id: 2, fontAweIconPrefix: 'fab', fontAweIconName: 'git', href: '/' },
  { id: 3, fontAweIconPrefix: 'fab', fontAweIconName: 'weibo', href: '/' },
  { id: 4, fontAweIconPrefix: 'fa', fontAweIconName: 'envelope-open', href: '/' }
];

const CategoryList = [
  { id: 1, href: '/', categoryName: '随笔', count: 10 },
  { id: 2, href: '/', categoryName: '吐槽', count: 99999 },
  { id: 3, href: '/', categoryName: 'windows客户端', count: 100000 },
];

const ArchiveList = [
  { id: 1, href: '/', date: '2019年7月', count: 10 },
  { id: 2, href: '/', date: '2019年12月', count: 99999 },
  { id: 3, href: '/', date: '2019年1月', count: 100000 },
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

    let notificationList = NotificationList.map(item => {
      return (
        <Notification
          key={item.id}
          category={item.category}
          link={item.link}
          title={item.title}
        />
      )
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
              <Widget title="搜索">
                <Search
                  placeholder="请输入关键字"
                  searchButtonText="站内搜索" />
              </Widget>

              <Widget title="公告">
                {notificationList}
              </Widget>

              <Widget title="社交">
                <Social socialList={SocialList} />
              </Widget>

              <Widget title="分类">
                <Category categoryList={CategoryList} />
              </Widget>

              <Widget title="存档">
                <Archive archiveList={ArchiveList} />
              </Widget>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default App;