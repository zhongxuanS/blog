import React, { Component } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Carousel from './components/carousel';

import pic1 from './components/carousel/images/pic1.jpg';
import pic2 from './components/carousel/images/pic2.jpg';
import pic3 from './components/carousel/images/pic3.jpg';

import './App.css';
class App extends Component {
  render() {
    const blogInfo = {
      blogTitle: 'szx9231',
      blogBranding: 'Way to Fun'
    };

    return (
      <div>
        <Header blogInfo={blogInfo}></Header>
        <Nav />
        <Carousel urlList={[{ id: 1, path: pic1 }, { id: 2, path: pic2 }, { id: 3, path: pic3 }]} />
      </div>
    );
  }
}
export default App;