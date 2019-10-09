import React from 'react';
import axios from 'axios';
import { Pagination } from 'antd';

import Carousel from '../carousel';
import Post from '../post';
import Widget from '../widget';
import Search from '../search';
import Notification from '../notification';
import Social from '../social';
import Category from '../category';
import Archive from '../archive';


import pic1 from '../carousel/images/pic1.jpg';
import pic2 from '../carousel/images/pic2.jpg';
import pic3 from '../carousel/images/pic3.jpg';


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


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postListCurPage: [],
      postCount: 0,
      categoryList: [],
      archiveList: []
    }
  }
  componentDidMount() {
    axios.post('/getTotalPost', {
      start: 0,
      count: 10
    }).then(({ data }) => {
      const isSuccess = data.isSuccess;
      if (isSuccess) {
        const responseData = data.data;
        const postCount = responseData.count;
        const postListCurPage = responseData.postList;
        this.setState({
          postListCurPage: postListCurPage.slice(),
          postCount
        })
      }
    }).catch(err => {
      console.log(err);
    });


    axios.post('/getCategory').then(({ data }) => {
      const isSuccess = data.isSuccess;
      if (isSuccess) {
        const responseData = data.data;
        const categoryList = responseData.categoryList.map(category => {
          return {
            id: category.id,
            name: category.name,
            count: category.count,
            href: `/category/${category.name}`
          }
        });

        this.setState({ categoryList });
      } else {
        console.log(data.errorMsg);
      }
    }).catch(err => {
      console.log(err);
    });

    axios.post('/getAllArchiveByMonth').then(({ data }) => {
      const isSuccess = data.isSuccess;
      if (isSuccess) {
        const responseData = data.data;
        const archiveList = responseData.archiveList.map(archive => {
          return {
            id: archive.id,
            month: archive.month,
            count: archive.count,
            href: `/archive/${archive.month}`
          }
        });

        this.setState({ archiveList });
      } else {
        console.log(data.errorMsg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  onPageChange = (page, pageSize) => {
    axios.post('/getTotalPost', {
      start: (page - 1) * pageSize,
      count: pageSize
    }).then(({ data }) => {
      const isSuccess = data.isSuccess;
      if (isSuccess) {
        const responseData = data.data;
        const postCount = responseData.count;
        const postListCurPage = responseData.postList;
        this.setState({
          postListCurPage: postListCurPage.slice(),
          postCount
        })
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const { postListCurPage, categoryList, archiveList, postCount } = this.state;
    let postList = postListCurPage.map(item => {
      return (
        <Post
          key={item.id}
          postMediaUrl={item.picPath}
          postTitle={item.title}
          postDate={item.created}
          postBrief={item.brief}
          postUrl={'post/' + item.id} />);
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
      <div className="container">
        <div className="row">
          <div className="col-md-8 main-content">
            <Carousel className="carousel" urlList={[{ id: 1, path: pic1 }, { id: 2, path: pic2 }, { id: 3, path: pic3 }]} />
            {postList}
            <Pagination defaultCurrent={1} total={postCount} onChange={this.onPageChange} />
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
              <Category categoryList={categoryList} />
            </Widget>

            <Widget title="存档">
              <Archive archiveList={archiveList} />
            </Widget>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;